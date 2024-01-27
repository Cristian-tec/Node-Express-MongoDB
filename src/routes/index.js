const {Router} = require('express')
const user = require('./user');
const login = require('./login')
const response = require('../utils/response');
const router = Router();

router.use('/user', user);

router.use('/login', login)

router.use('*', (req, res) => res.status(404).send("Not found"));

router.use((err, req, res, next)=>{
    res.status(err.statusCode || 500).json({
        error: true,
        message: err.message
    })
})
module.exports = router;