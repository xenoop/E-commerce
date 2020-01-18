var bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
// code: number;
// prix: number;
// name: string;
// description: string;
// url: string;
// isDispo: boolean;
let produitSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: Number,
    name: String,
    marque: String,
    categorie: {
        type: String,
        enum: ['2 in 1 laptops ', 'traditional laptop', 'gaming laptop'],
        default: 'traditional laptop'
    },
    prix: Number,
    description: String,
    urlImage: String,
    quantite: Number
});
const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;

