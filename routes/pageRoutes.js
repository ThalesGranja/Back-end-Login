const express = require("express");
const router = express.Router();
const PageController = require("../controllers/pageController");
const AuthMiddleware = require("../middleware/authMiddleware");

router.get("/", PageController.redirectToLogin);

router.get("/protected", AuthMiddleware.requireAuth, PageController.showProtectedPage);

router.get("/sim", AuthMiddleware.requireAuth, PageController.showSimPage);

router.get("/nao", AuthMiddleware.requireAuth, PageController.showNaoPage);

module.exports = router;

