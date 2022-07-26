const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const auth = require('../middleware/auth')

const category = require('../controller/categoryCont')

router.post('/api/category', auth, upload.single('image'), category.addCategory)
router.get('/api/category', category.getCategory)
router.get('/api/category/:id', category.getSingleCategory)
router.put('/api/category/:id', upload.single('image'), auth, category.updateCategory)
router.delete('/api/category/:id', auth, category.deleteCategory)



module.exports = router