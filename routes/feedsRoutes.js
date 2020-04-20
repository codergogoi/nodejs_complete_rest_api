const express = require("express");
const { body } = require("express-validator");
const feedController = require("../controller/feedController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/post", auth, feedController.getAllPost);

router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  auth,
  feedController.createPost
);

router.get("/post/:postId", auth, feedController.getPost);

router.put("/post/:postId", auth, feedController.updatePost);

router.delete("/post/:postId", auth, feedController.deletePost);

module.exports = router;
