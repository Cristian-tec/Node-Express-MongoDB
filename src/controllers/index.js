//Controlador de orden superior para manejar errores  
//------------------------------------------------------
const {catchedAsync} = require('../utils/index_utils');
//------------------------------------------------------
module.exports = {
    getUsers: catchedAsync(require('./getUsers')),
    postUser: catchedAsync(require('./postUser')),
    deleteUser: catchedAsync(require('./deleteUser')),
    getLogin: catchedAsync(require('./getLogin'))
}