// Express
const express = require('express')
const router = express.Router()

// Middleware
const protect = require('../../middleware/authMiddleware')
const upload = require('../../middleware/multer')

// Routes
const {
  allListings,
  singleListing,
  createListing,
  updateListing,
  deleteListing,
} = require('../../controller/inventoryController')

//  extend route '/api/inventory'
router
  .route('/')
  .get(allListings)
  .post(protect, upload.any('image'), createListing)
router
  .route('/:id')
  .get(singleListing)
  .patch(updateListing)
  .delete(deleteListing)

module.exports = router
