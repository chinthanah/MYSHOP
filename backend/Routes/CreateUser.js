const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const user = require("../schema/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

router.post(
  "/createuser",
  [
    body("name", "incorrect name").isLength({ min: 5 }),
    body("email", "incorrect email").isEmail(),
    body("location", "enter valid location").isLength({ min: 5 }),
    body("password", "wrong password").isLength({ min: 5 }),
  ],

  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await user.create({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: secPassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
