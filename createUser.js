const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB").then(async () => {
    const hashedPassword = await bcrypt.hash("123456", 10);
    const user = new User({ email: "teste@email.com", password: hashedPassword });
    await user.save();
    console.log("Usuário criado com sucesso!");
    process.exit();
});