const express = require('express')
const router = express.Router()
const comments = require('../controller/commentsCont')

router.post('/api/comments/:id', comments.createComment)

module.exports = router