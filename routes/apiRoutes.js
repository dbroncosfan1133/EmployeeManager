var db = require("../models");

module.exports = function(app) {
  app.post("/api/users", function(req, res) {
    console.log(req.body)
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      first: req.body.first_name,
      last: req.body.last_name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zipcode
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};