const router = require("express").Router();


router.get("/", (req, res, next) => {
  res.render("profile", { userConnected: req.session.user });
  console.log("/profile",req.session)
});

module.exports = router;
