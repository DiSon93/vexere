const { Trip, Station } = require('../models');

const createTrip = async (req, res) => {
  const { fromStation, toStation, startTime, price } = req.body;
  const newTrip = await Trip.create({ fromStation, toStation, startTime, price });
  res.status(201).send(newTrip)
}

const getAllTrip = async (req, res) => {
  const tripList = await Trip.findAll({
    include: [
      {
        model: Station,
        as: "from"
      },
      {
        model: Station,
        as: "to"
      },
    ]
  });
  res.status(200).send(tripList);
}

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  try{
  await Trip.destroy({
    where: {
      id
    }
  });
  res.status(200).send("Bạn đã xóa thành công");
  }catch (error){
    res.status(500).send("Bạn xóa không thành thành công");
  }
}

const updateTrip = async(req, res) => {
  const { id } = req.params;
    const { fromStation, toStation, startTime, price } = req.body;
    try{
      await Trip.update({fromStation, toStation, startTime, price}, {
        where: {
          id,
        }
      });
      res.status(200).send(`Đã update thành công trip có id = ${id}`);
    }catch(error){
      res.status(500).send(error);

    }
 
}


 module.exports = {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip,
  updateTrip,
}