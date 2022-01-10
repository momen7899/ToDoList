const User = require("../mysql/user.model.js");

exports.create = (req, res) => {``
  console.log(req.body)

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

  console.log({user});

  // Save Tutorial in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
  
};

// exports.validUser = (req, res) => {

// };