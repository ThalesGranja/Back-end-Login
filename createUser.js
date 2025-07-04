const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB").then(async () => {
    const user = new User({ email: "teste2@email.com", password: "121212" });
    await user.save();
    console.log("Usuário criado com sucesso!");
    process.exit();
});