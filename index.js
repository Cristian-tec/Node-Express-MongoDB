const server = require('./src/server.js')
const db = require('./src/db.js')
require('dotenv').config();

const {PORT} = process.env

server.listen(PORT, async ()=>{
    console.log(`Server listening ${PORT}`);
    await db();
})