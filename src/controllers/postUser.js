const User = require("../models/userModel");
const response = require("../utils/response");
const {createUser} = require('../data/index_db')

module.exports = async (req, res) => {

  const data = await createUser(req, res);
  response(res, 200, data);

};
