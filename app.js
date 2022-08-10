const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const register = require("./routes/register")
const login = require("./routes/login")
const profile = require("./routes/profile")
const cards = require("./routes/cards")

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.connect(process.env.db,{useNewUrlParser: true})
.then(() => console.log("connected to mongodb"))
.catch(() => console.log("cannot connet to mongodb"));

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/profile", profile);
app.use("/api/cards", cards);



app.listen(PORT, () => console.log("server started on port" + PORT));