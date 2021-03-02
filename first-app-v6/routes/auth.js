const express = require('express');
const { body } = require('express-validator');

const User = require('../models/user');

const authController = require('../controllers/auth');

const router = express.Router();

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
    body("name").trim().not().isEmpty()
  ],
  authController.signup
);

// router.get('/posts', feedController.getPosts);

// router.post(
//   "/post",
//   [
//     body("title").trim().isLength({ min: 5 }),
//     body("content").trim().isLength({ min: 5 }),
//   ],
//   feedController.createPost
// );

// router.get('/post/:postId', feedController.getPost);

// router.put(
//   "/post/:postId",
//   [
//     body("title").trim().isLength({ min: 5 }),
//     body("content").trim().isLength({ min: 5 }),
//   ],
//   feedController.updatePost
// );

// router.delete("/post/:postId", feedController.deletePost);

module.exports = router;