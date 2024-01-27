const ClientError = require('../utils/errors/index_errors');
const {response} = require('../utils/index_utils')
const {loginUser} = require('../data/index_db')

module.exports = async (req, res)=>{

    const data = await loginUser(req, res);
    response(res, 200, data)
    
}