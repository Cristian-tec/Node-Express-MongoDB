const mongoose = require("mongoose");
require("dotenv").config();

const { DB_PORT, DB_NAME, DB_HOST } = process.env;

const db_connect = () => {
  mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  })
};

mongoose.connection.on('connected', () => console.log('BBDD Conectado!')); 

module.exports = db_connect;