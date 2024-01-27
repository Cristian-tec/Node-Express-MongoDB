const ClientError = require('../utils/errors/index_errors');
const User = require("../models/userModel");
const pass = require("../helpers/index_crypt");
const bcrypt = require("bcryptjs"); 

module.exports = {
  listUsers: async (req, res) => {
    const users = await User.find();
    //console.log(users.length);
    //users.map((elem) => ({_id: elem._id, Name: elem.Name, Email: elem.Email}))
    return  users.map((elem) => ({_id: elem._id, Name: elem.Name, Email: elem.Email}))
  },
  createUser: async (req, res) => {
    const { Name, Email, Password } = req.body;
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(!validEmail.test(Email) ) throw new ClientError('Mail escrito incorrecto', 400)
    const user = await User.findOne({ Email });
    if(user) throw new ClientError('El usuario ya existe', 400)
    const crypt = await pass.encrypt(Password);
    //console.log(crypt);
    await User.create({ Name, Email, Password: crypt });
    return { Name, Email, Password: '******', State: 'Usuario creado correctamente' };
  },
  loginUser: async (req, res) => {
    const { Email, Password } = req.body;
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(!validEmail.test(Email) ) throw new ClientError('Mail escrito incorrecto', 400)
    const user = await User.findOne({ Email });
    if(!user) throw new ClientError('Usuario no registrado',401)
    const compare = await bcrypt.compare(Password, user.Password);
    if(!compare) throw new ClientError('Contraseña incorrecta',401)
    return {Name: user.Name, Email: user.Email, State: 'Login exitoso'} 
  }
};
