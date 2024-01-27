const bcrypt = require("bcryptjs"); 

module.exports = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};
