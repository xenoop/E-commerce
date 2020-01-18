const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');


router.get('/userinfo/:username', verify, async (req, res) => {
    const user = await User.findOne({username: req.params.username});
        res.status(200).send(user);
    }
);
router.post('/register', async (req, res) => {
    //checking the username
    const usernameExists = await User.findOne({username: req.body.username});
    if (usernameExists) return res.status(400).send('username already exists');


    //hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //creating a new user
    const user = new User({
        prenom: req.body.prenom,
        nom: req.body.nom,
        username: req.body.username,
        password: hashedPassword,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser)

    } catch (err) {
        res.status(400).send(err)
    }
});

// router.put('/addCommand', verify,)
router.put('/addCommand/:username', verify, function (req, res, next) {
    User.findOneAndUpdate({username: req.params.username}, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



//Login
router.post('/login', async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    if (!user) return res.status(400).send('Username or password is wrong');
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('invalid password');
    //Createing and assign the token
    const token = jwt.sign({_id: user._id}, process.env.token_key);
    res.header('auth-token', token).status(200).send(token);
});


module.exports = router;
