const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const { Register } = require("../controllers/Register")
const { Login }= require("../controllers/login")

router.post('/addUser',Register);
router.post("/signin",Login);

module.exports = router