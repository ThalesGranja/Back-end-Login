const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const User = require("./models/User");
const path = require("path");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(session({
  secret: "segredoSuperSecreto",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 600000 }
}));

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user._id;

    // Armazena o e-mail em um cookie
    res.cookie("userEmail", user.email, { maxAge: 600000, httpOnly: true });

    res.redirect("/protected");
  } else {
    res.redirect("/login?erro=1");
  }
});

app.get("/protected", (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }

  res.sendFile(path.join(__dirname, "/views/protected.html"));
});

app.get("/logout", (req, res) => {
  res.clearCookie("userEmail"); // Limpa o cookie
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

app.get("/sim", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/sim.html"));
});

app.get("/nao", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/nao.html"));
});


app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));