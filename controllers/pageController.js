const path = require("path");

class PageController {
  static showProtectedPage(req, res) {
    res.sendFile(path.join(__dirname, "../views/protected.html"));
  }

  static showSimPage(req, res) {
    res.sendFile(path.join(__dirname, "../views/sim.html"));
  }

  static showNaoPage(req, res) {
    res.sendFile(path.join(__dirname, "../views/nao.html"));
  }

  static redirectToLogin(req, res) {
    res.redirect("/login");
  }
}

module.exports = PageController;

