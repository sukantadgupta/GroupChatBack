const express = require('express')

const router = express.Router()

const msgController = require('../controllers/message')
const authenticateMiddleware = require('../middleware/auth')

router.post('/tostore/:id',authenticateMiddleware.authenticate,msgController.addMsg)
//router.get('/toget',msgController.getMsg)
router.get('/toget/:id',authenticateMiddleware.authenticate,msgController.getMsg)
router.get('/localmsg',msgController.getMsgOnLimit)

module.exports = router