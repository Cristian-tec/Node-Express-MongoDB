const { Router } = require("express");
const router = Router();
const middleware = require('../middlewares/index_middleware')

const controller = require('../controllers/index')

router.get("/", controller.getUsers);

router.post('/', middleware.userValidation, controller.postUser);

router.delete('/', controller.deleteUser);

module.exports = router;
