const mongoose = require('mongoose')

const Inventory = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User',
  // },
  images: {
    type: [],
  },
  condition: {
    type: String,
    enum: ['New', 'Preowned', 'Demo'],
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    min: 1900,
    max: 2023,
    required: true,
  },
  make: {
    type: String,
    maxlength: 25,
    required: true,
  },
  model: {
    type: String,
    maxlength: 25,
    required: true,
  },
  price: {
    type: Number,
    min: 1,
    max: 1000000,
    required: true,
  },
  description: {
    type: String,
  },
  inStock: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: false,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('inventory', Inventory)
