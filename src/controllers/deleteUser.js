const User = require("../models/userModel");

module.exports = async (req, res) => {
  try {
    const idd = req.query.id;
    //console.log('->', idd);
    const userToDelete = await User.find({_id: idd})
    if(!userToDelete) throw new Error('Id do not exist!')
    //console.log(userToDelete[0].Name);
    const userDelete = await User.deleteOne({_id: idd})
    res.status(200).json({Db_msg: userDelete, usDelete: userToDelete});
  } catch (error) {
    res.status(404).send(error.message);
  }
};
