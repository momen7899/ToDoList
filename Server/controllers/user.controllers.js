const User = require("../model/user.model.js");

exports.create = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    token: req.body.username
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
  
};

exports.validUser = (req, res) => {

  if (!req.query) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }


  const user = new User({
    username: req.query.username,
    password: req.query.password
  });

  User.validUser(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};