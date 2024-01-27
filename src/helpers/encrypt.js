const bcrypt = require('bcryptjs') 

module.exports = async (textPlain) => { //TODO: 123456
    const hash = await bcrypt.hash(textPlain, 10) //0404o4ofoto4o
    return hash
}
