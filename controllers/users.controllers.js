const { Users, sequelize } = require('../models');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body;
    try {
      //tạo avatar mặc định
      const avatarUrl = gravatar.url(email);
        //tạo ra 1 chuỗi ngấu nhiên
        const salt = bcrypt.genSaltSync(10);
        //mã hóa chuỗi ngẫu nhiên vừa mới tạo ra + password
        const hashPasword = bcrypt.hashSync(password, salt);
        const newUser = await Users.create({ name, email, password: hashPasword, numberPhone, avatar: avatarUrl });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}
const login = async (req, res) => {
  const {email, password} = req.body;
  //B1: tìm ra user đang đăng nhập dựa trên email
  const user = await Users.findOne({
      where: {
          email,
      }
  });
  //B2: kiểm tra mật khẩu có đúng hay không
  if(user){
    const isAuth = bcrypt.compareSync(password, user.password);
    console.log("isAuth : ", isAuth);
    if(isAuth){
      const token = jwt.sign({email: user.email,type: user.type}, "son-di-2390", {expiresIn: 60 * 60})
        res.status(200).send({message: "Đăng nhập thành công!", token});
    }else{
      res.status(500).send({message: "Đăng nhập thất bại!"});
  
    }
  }else{
    res.status(404).send({message: "Không tìm thấy email phù hợp!"});

  }
  
} 

const uploadAvatar = async (req, res) => {
  const {file}  = req;
  const urlImage = `http://localhost:3000/${file.path}`;
  const { user } = req;
  const userFound = await Users.findOne({
    where: {
      email: user.email
    }
  });
  userFound.avatar = urlImage;
  await  userFound.save();
   res.status(200).send(userFound);
}
const getAllTrip = async (req, res) => {
  // res.send("run get all trip")
  try{
    const [results ]  =  await sequelize.query(
      `
      select users.name as user_name, fromSta.name as fromStation, toSta.name as toStation from users
  inner join tickets on users.id = tickets.user_id
  inner join trips on  trips.id = tickets.trip_id
  inner join stations as fromSta on fromSta.id = trips.fromStation
  inner join stations as toSta on toSta.id = trips.toStation;`
    );
    res.send(results);
  }catch(error){
     res.status(500).send(error);
  }

}


module.exports = {
    register,
    login,
    uploadAvatar,
    getAllTrip,
}