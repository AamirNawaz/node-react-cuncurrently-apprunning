var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/alldata", function(req, res, next) {
  // res.send(req.body);
  // res.send(req.body.user);

  //usign single variable
  var name = req.body.user.fullname;
  var email = req.body.user.email;
  var password = req.body.user.password;
  var country = req.body.user.country;

  //usign array to save data
  const data = {
    name: req.body.user.fullname,
    email: req.body.user.email,
    password: req.body.user.password,
    country: req.body.user.country
  };
  res.send(data);
});

module.exports = router;
