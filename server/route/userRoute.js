const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const auth = require('../middleware/auth')
const user = require('../controller/userCont')

router.post('/api/user/signup', user.userSignup)
router.get('/api/user', auth, user.getAllUser)
router.get('/api/user/:id', auth, user.getSingleUser)
router.put('/api/user/:id', upload.single('image'), auth, user.updateUser)
router.delete('/api/user/:id', auth, user.deleteUser)

module.exports = router