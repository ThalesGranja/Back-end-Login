const bcrypt = require("bcrypt");
const User = require("../models/User");
const path = require("path");

class AuthController {
  static showLoginPage(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      
      const user = await User.findOne({ email });

      if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user._id;
        
        res.cookie("userEmail", user.email, { 
          maxAge: 600000, 
          httpOnly: true 
        });

        res.redirect("/protected");
      } else {
        res.redirect("/login?erro=1");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      res.redirect("/login?erro=1");
    }
  }

  static logout(req, res) {
    res.clearCookie("userEmail");
    
    req.session.destroy(() => {
      res.redirect("/login");
    });
  }
}

module.exports = AuthController;

