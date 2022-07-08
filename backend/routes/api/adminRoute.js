// Express
const express = require('express')
const router = express.Router()
const protect = require('../../middleware/authMiddleware')

const adminController = require('../../controller/adminController')

router.get('/', protect, adminController)

module.exports = router
