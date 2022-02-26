const { Station }= require('../models');
const express = require('express');
const { createStation, getAllStation, getDetailStation, upadteStation, deleteStation } = require('../controllers/station.controller');
const { checkExist } = require("../middlewares/validations/checkExist");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

const stationRouter = express.Router();

stationRouter.post("/", authenticate,authorize(["ADMIN", "SUPER_ADMIN"]), createStation);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", checkExist(Station) , upadteStation);
stationRouter.delete("/:id", authenticate, checkExist(Station), deleteStation);


module.exports = {
    stationRouter,
}