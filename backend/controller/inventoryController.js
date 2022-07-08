const asyncHandler = require('express-async-handler')
const inventory = require('../models/inventory')

// @desc   Get all listings
// @route  GET  /api/inventory
// @access Public
const allListings = asyncHandler(async (req, res) => {
  const listings = await inventory.find()
  res.status(200).json(listings)
})

// @desc   Create new listing
// @route  POST  /api/inventory
// @access Private
const createListing = asyncHandler(async (req, res) => {
  const product = await inventory.create({
    // user: req.user.id,
    images: req.files,
    condition: req.body.condition,
    type: req.body.type,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    price: req.body.price,
    features: req.body.features,
    description: req.body.description,
    inStock: req.body.inStock,
    createdAt: req.body.createdAt,
    updatedOn: req.body.updatedOn,
  })

  res.status(200).json(product)
})

// @desc   Get Single Listing by ID
// @route  GET  /api/inventory/id
// @access Public
const singleListing = asyncHandler(async (req, res) => {
  const listing = await inventory.findById(req.params.id)

  if (!listing) {
    res.status(400)
    throw new Error('Nothing was found.')
  }

  res.json(listing)
})

// @desc   Update Exsisting Listing
// @route  PATCH  /api/inventory/id
// @access Private
const updateListing = asyncHandler(async (req, res) => {
  const listing = await inventory.findById(req.params.id)

  if (!listing) {
    res.status(400)
    throw new Error('Nothing was found')
  }

  const updated = await inventory.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updated)
})

// @desc   Delete single listing
// @route  DELETE  /api/inventory/id
// @access Private
const deleteListing = asyncHandler(async (req, res) => {
  const listing = await inventory.findById(req.params.id)

  if (!listing) {
    res.status(400)
    throw new Error('Nothing was found.')
  }

  await listing.remove()

  res.status(200).json({ deleted: req.params.id })
})

module.exports = {
  allListings,
  singleListing,
  createListing,
  updateListing,
  deleteListing,
}
