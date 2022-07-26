const express = require('express')
const router = express.Router()
const user = require('../controller/loginCont')

router.post('/user/login', user.userLogin)

module.exports = router