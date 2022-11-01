const router = require("express").Router();
const User = require('../models/User.model.js')

/* GET signup page */
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res) => {
    await User.create({
        username : req.body.username,
        password : req.body.password
    }) 
    res.redirect("/profile");
  });

module.exports = router;