const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
let userSchema = mongoose.Schema({
    prenom: String,
    nom: String,
    username: {type: String, unique: true},
    password: String,
    commandes: [{
        idProduit: String,
        status: {
            type: String,
            default: "On Its Way"
        }
    }],
    //Todo add image url storage in mongodb and add commands realized by the client aka user
    date: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model("user", userSchema);
module.exports = User;
