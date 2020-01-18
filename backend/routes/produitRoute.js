const express = require('express');
const produit = require('../model/produit');
const router = express.Router();
const verify = require('./verifyToken');

const mongoose = require('mongoose');

// _id: mongoose.Schema.Types.ObjectId,
//     code: Number,
//     name: String,
//     marque: String,
//     categorie: {
//     type: String,
// enum: ['2 in 1 laptops ', 'traditional laptop', 'gaming laptop'],
// default: "traditional laptop"
// },
// prix: Number,
//     description: String,
//     urlImage: String,
//     quantite: Number

//Todo change the products methods?
router.get('/produits', verify, (req, res) => {
    produit.find((err, produit) => {
        if (err) res.status(500).send(err);
        else if (!produit) res.status(404).send('liste des produits est vide');
        else res.status(200).send(produit);
    })
});
router.get('/produits/:id', verify, function (req, res, next) {
    produit.findById(req.params.id, function (err, post) {
        if (err) return res.status(404).send('le produit n existe pas ');
        res.json(post);
    });
});
router.get('/produitsbydesc/:search', verify, function (req, res, next) {
    let searchname = req.params.search;
    produit.find({description: searchname}, function (err, post) {
        if (err) return res.status(404).send('le produit n existe pas ');
        res.json(post)
    });
});
router.get('/produitsbyname/:search', verify, function (req, res, next) {
    let searchname = req.params.search;
    produit.find({name: searchname}, function (err, post) {
        if (err) return res.status(404).send('le produit n existe pas ');
        res.json(post)
    });
});
router.put('/produits/:id', verify, function (req, res, next) {
    produit.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/produits', verify, (req, res) => {
    let id = new mongoose.Types.ObjectId;
    let newProduit = new produit({
        _id: id,
        name: req.body.name,
        categorie: req.body.categorie,
        marque: req.body.marque,
        description: req.body.description,
        quantite: req.body.quantite,
        prix: req.body.prix,
        urlImage: req.body.urlImage
    });
    newProduit.save((err, results) => {
        if (err) console.log(newProduit);
        else res.status(200).json(results);
    })
});
router.delete('/produits/:id', verify, function (req, res, next) {
    produit.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
