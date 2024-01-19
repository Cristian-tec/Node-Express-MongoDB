const ClientError = require('../utils/errors/index_errors')

module.exports = (req, res, next) => {
  const { Name, Email } = req.body;
  if (Name && Email) return next();
  else throw new ClientError("Error en el nombre o e-mail", 505)
};
