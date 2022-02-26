const express = require('express');
const { stationRouter } = require('./stations.routers');
const { usersRouter } = require('./users.routers');
const { tripRouter } = require('./trip.routers');
const {fingerPrintRouter} = require('./test-finger-print');
const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", usersRouter);
rootRouter.use("/trips", tripRouter);
rootRouter.use("/test-finger-print", fingerPrintRouter);



module.exports = {
    rootRouter
}