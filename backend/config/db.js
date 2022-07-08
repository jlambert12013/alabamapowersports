const mongoose = require('mongoose')

const connectDB = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI)
    console.log(`DATABASE: `.white + `CONNECTED`.brightGreen)
  } catch (err) {
    console.log(`DATABASE: `.white + `NOT CONNECTED`.yellow)
    console.log(`${err}`.toUpperCase().red)
  }
  mongoose.connect(mongoURI)
}

module.exports = connectDB
