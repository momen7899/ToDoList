const Note = require("../model/note.model.js");
var moment = require('moment');

exports.create = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }


  // Create a Note
  const note = new Note({
    userId: req.body.userId,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status ? 1 : 0,
    date: moment(Date.now()).format('YYYY-MM-DD'),
    time: moment().utc().format('hh:mm:ss')
  });

  // Save Notes in the database
  Note.create(note, (err, data) => {
    console.log(err)
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Note."
      });
    else res.send(data);
  });
  
};

exports.get = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Note.get(req.query.userId, (err, data) => {
    console.log(err)
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while get the Notes."
      });
    else res.send(data);
  });
  
};

exports.status = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const note = new Note({
    id: req.body.id,
    userId: req.body.userId,
    status: req.body.status ? 1 : 0,
  });
  
  console.log(note)

  Note.status(note, (err, data) => {
    console.log(err)
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while change status of the Notes."
      });
    else res.send(data);
  });
  
};

exports.edit = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }


  // Create a Note
  const note = new Note({
    id: req.body.id,
    userId: req.body.userId,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status ? 1 : 0,
    date: moment(Date.now()).format('YYYY-MM-DD'),
    time: moment().utc().format('hh:mm:ss')
  });

  // Save Notes in the database
  Note.edit(note, (err, data) => {
    console.log(err)
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Note."
      });
    else res.send(data);
  });
  
};


exports.delete = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const note = new Note({
    id: req.body.id,
    userId: req.body.userId
    });


  Note.delete(note, (err, data) => {
    if (err){
      console.log(err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Note."
      });
    }
    else res.send(data);
  });
  
};

exports.deleteAll = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const note = new Note({
    userId: req.body.userId
    });


  Note.deleteAll(note, (err, data) => {
    if (err){
      console.log(err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Note."
      });
    }
    else res.send(data);
  });
  
};
