// Express
const express = require("express");
const router = express.Router();
const { loginUser, registerUser } = require("../../controller/userController");

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
