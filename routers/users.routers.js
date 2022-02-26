const express = require('express');
const { register, login , uploadAvatar, getAllTrip} = require('../controllers/users.controllers');
const { authenticate } = require('../middlewares/auth/authenticate');
const { uploadImage } = require('../middlewares/uploads/upload-image');
// const { checkExist } = require("../middlewares/validations/checkExist");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);


usersRouter.post("/upload-avatar",authenticate, uploadImage('avatar'), uploadAvatar );
usersRouter.get("/all-trip", getAllTrip);
// usersRouter.get("/:id", getDetailStation);
// usersRouter.put("/:id", checkExist(Station) , upadteStation);
// usersRouter.delete("/:id",checkExist(Station), deleteStation);


module.exports = {
    usersRouter,
}