const express = require('express')
const morgan = require('morgan')
const router = require('./routes/index')
const user = require('./routes/user')
require('dotenv').config();
const {NODE_ENV} = process.env

const server = express();
NODE_ENV ==='development' && server.use(morgan('dev'))
server.use(express.json());

server.use(router)

module.exports = server;