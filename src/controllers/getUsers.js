const data = require("../data/index_db"); //  cualquiera de las dos
const {listUsers} = require("../data/index_db");// cualquiera de las dos
const { response } = require("../utils/index_utils");

module.exports = async (req, res) => {

  const users = await listUsers(); 
  response(res, 200, users);

};
