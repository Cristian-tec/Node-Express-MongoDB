const { Router } = require("express");
const router = Router();

const controller = require('../controllers/index')

router.get("/", controller.getUsers);

router.post('/', controller.postUser);

router.delete('/', controller.deleteUser);

module.exports = router;
