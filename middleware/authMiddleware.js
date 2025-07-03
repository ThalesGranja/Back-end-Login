class AuthMiddleware {
  static requireAuth(req, res, next) {
    if (!req.session.userId) {
      return res.redirect("/login");
    }
    next();
  }

  static redirectIfAuthenticated(req, res, next) {
    if (req.session.userId) {
      return res.redirect("/protected");
    }
    next();
  }

  static logRequests(req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  }
}

module.exports = AuthMiddleware;

