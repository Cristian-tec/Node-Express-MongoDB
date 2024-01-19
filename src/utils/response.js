//Funcion para hacer la respuesta  res.status.json ....

module.exports = (res, statusCode, data) => {
  res.status(statusCode).json({
    error: false,
    data: data
  });
};
