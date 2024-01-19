const User = require("../models/userModel");

module.exports = {
    list: async (req, res)=>{
        const users = await User.find();
        return users;
    }, 
    createUser: async (req, res) =>{

        await User.create(req.body)
        return req.body
    }
}