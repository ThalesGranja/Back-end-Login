const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");
const AuthMiddleware = require("../middleware/authMiddleware");

router.get("/login", AuthMiddleware.redirectIfAuthenticated, AuthController.showLoginPage);

router.post("/login", AuthController.login);

router.get("/logout", AuthController.logout);

module.exports = router;

