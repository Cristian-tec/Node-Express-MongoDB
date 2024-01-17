const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
    Name: {
        type: String,
    },
    Email:{
        type: String
    },
    Password: {
        type: String,
        default: 123
    }
},
{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("User", userModel)