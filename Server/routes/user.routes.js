module.exports = app => {
    const user = require("../controllers/user.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/login", user.create);
  
    // Retrieve valid user
    router.get("/login", user.validUser);

  
    app.use('/api/user', router);
  };