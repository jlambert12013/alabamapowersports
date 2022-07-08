const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const generateToken = require('../utils/generateToken')

// @desc   Create new user
// @route  POST  /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const emailLower = email.toLowerCase()

  // Error Strings
  const registerErrorString = 'Please include all fields.'.toUpperCase()
  const alreadyRegisterErrorString =
    emailLower +
    ' is already in use. Please login or use a different email addess to sign up.'.toUpperCase()

  if (!firstName || !lastName || !email || !password) {
    res.status(400)
    throw new Error(registerErrorString.yellow)
  }

  // Check for Duplication
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error(alreadyRegisterErrorString.yellow)
  }

  // Hash Password using Bcrypt Salt
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create User
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  })

  // Store New User
  if (user) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Could not register user. Please try again later.')
  }
})

// @desc   Login User
// @route  POST  /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const loginError = 'Login failed. Please try again.'.toUpperCase()
  const { email, password } = req.body

  const userEmail = await User.findOne({ email })

  if (userEmail && (await bcrypt.compare(password, userEmail.password))) {
    res.json({
      _id: userEmail.id,
      name: userEmail.name,
      email: userEmail.email,
      token: generateToken(userEmail._id),
    })
  } else {
    res.status(400)
    throw new Error(loginError.yellow)
  }
})

module.exports = { registerUser, loginUser }
