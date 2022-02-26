const checkExist = (Model) => {
    return async (req, res, next) => {
        //kiểm tra station có tòn tại hay không
        const { id } = req.params;
     
        const station = await Model.findOne({
            where: {
                id,
            }
        });
        console.log("station: ", station);
        if(station){
            next();
        }else{
            res.status(404).send(`Không tìm thấy station có id là: ${id}`)
        }
     }    
}
 
 module.exports = {
    checkExist
 }