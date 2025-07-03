const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const pageRoutes = require("./routes/pageRoutes");

const AuthMiddleware = require("./middleware/authMiddleware");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar ao MongoDB:", err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(session({
  secret: "segredoSuperSecreto",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 600000 }
}));

app.use(AuthMiddleware.logRequests);

app.use("/", authRoutes);
app.use("/", pageRoutes);

app.use((req, res) => {
  res.status(404).send("Página não encontrada");
});

app.use((err, req, res, next) => {
  console.error("Erro:", err);
  res.status(500).send("Erro interno do servidor");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

