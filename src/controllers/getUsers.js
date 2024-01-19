const data = require("../data/index_db"); //  cualquiera de las dos
const {list} = require("../data/index_db");// cualquiera de las dos
const { response } = require("../utils/index_utils");

module.exports = async (req, res) => {

  const users = await list(); 
  response(res, 200, users);

};
