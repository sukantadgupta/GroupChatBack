const express = require('express')

const router = express.Router()

const userController = require('../controllers/user')

router.post('/signup',userController.addUser);
router.post('/login',userController.userLogin);

module.exports = router