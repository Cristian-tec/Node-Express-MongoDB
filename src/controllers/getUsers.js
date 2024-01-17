const User = require("../models/userModel");

module.exports = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
