const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const User = require("../models/user");
const userController = require("../controller/userController");

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a  valid email")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("email address already exist");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 6 }),
    body("name").trim().notEmpty(),
  ],
  userController.signup
);

router.post("/login", userController.login);

module.exports = router;
