const express = require("express");
const bodyParser = require("body-parser");
const Cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const dotenv = require('dotenv');
dotenv.config();
const produitRoute = require("./routes/produitRoute");
const PORT = 5000;

const server = express();
server.use(bodyParser.json());
server.use(Cors());


mongoose.connect("mongodb://localhost:27017/produits", {useNewUrlParser: true});
mongoose.connection.once("open", () => {
    console.log("connexion réussite à la base Produit");
});

server.use("/api/user", auth);
server.use(produitRoute);


server.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});
