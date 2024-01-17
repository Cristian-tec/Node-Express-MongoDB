const User = require("../models/userModel");

module.exports = (req, res) =>{
    try{
        const {Name, Email, Password} = req.body;

        if(!Name || !Email) throw new Error('Falta Name or Email');
        
        User.create({Name, Email, Password})
        res.status(200).json({Name, Email, Password})

    }catch (e) {
        return res.status(404).send(e.message)
    }
 
}