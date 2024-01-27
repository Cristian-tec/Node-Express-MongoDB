const ClientError = require('../utils/errors/index_errors');
const User = require('../models/userModel')

module.exports = (req, res, next) => {
  const { Email, Password } = req.body;

  if (Email && Password) return next();
  else throw new ClientError("Faltan datos, controle Name/email/password...", 505)
};
