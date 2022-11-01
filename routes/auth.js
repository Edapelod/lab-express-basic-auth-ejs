const router = require("express").Router();
const User = require('../models/User.model.js');
const bcrypt = require('bcryptjs')


/* GET signup page */
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.get("/profile", (req, res, next) => {
    res.render("profile");
  });

router.post("/signup", async (req, res) => {
    const salt = bcrypt.genSaltSync(11)
    const passwordHash = bcrypt.hashSync(req.body.password, salt)
    await User.create({
        username : req.body.username,
        password : passwordHash
    }) 
    res.redirect("/profile");
  });

module.exports = router;
//