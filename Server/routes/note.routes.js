module.exports = app => {
    const notes = require("../controllers/note.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new notes
    router.post("/add", notes.create);
  
    // // get a list of items by specefic user
    router.get("/get", notes.get);

    // // update status of a note
    router.post("/status", notes.status);
    
    // // delete one item
    // router.post("/delete", notes.delete);

    // // delete all of user's item
    // router.post("/deleteAll", notes.deleteAll);

    // // search something in notes
    // router.get("/search", notes.search);

    // // filter notes
    // router.get("filter",notes.filter);

    app.use('/api/note', router);
  };