const { Router } = require("express");
const router = Router();
const middleware = require('../middlewares/index_middleware')
const controller = require('../controllers/index')

router.use('/', middleware.loginValidation, controller.getLogin)

module.exports = router;