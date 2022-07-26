const express = require('express')
const router = express.Router()
const articles = require('../controller/articleCont')
const upload = require('../middleware/upload')
const auth = require('../middleware/auth')


router.post('/api/article', upload.single('image'), auth, articles.createArticle)
router.get('/api/article', articles.getArticle)
router.get('/api/article/:id', articles.getSingleArticle)
router.put('/api/article/:id', auth, upload.single('image'), articles.updateArticle)
router.delete('/api/article/:id', auth, articles.deleteArticle)


module.exports = router