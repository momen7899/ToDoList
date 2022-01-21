const sql = require("../mysql/db.js");

// constructor
const Note = function(note) {
  this.id = note.id;
  this.userId = note.userId;
  this.title = note.title;
  this.description = note.description;
  this.status = note.status;
  this.date = note.date; 
  this.time = note.time;
};


Note.create = (newNote, result) => {
    sql.query("INSERT INTO notes SET ?", newNote, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log(res)
        console.log("created notes: ", { id: res.insertId, ...newNote });
        result(null,{ id: res.insertId, ...newNote });
  });
};

Note.get = (userId, result) => {
    sql.query(`SELECT * FROM notes WHERE userId = '${userId}'` ,(err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        if (res.length) {
            console.log("found notes");
            result(null, res);
            return;
          }
      
          result({ kind: "not_found" }, null);
        });
}

Note.filterDone = (userId, result) => {
  sql.query(`SELECT * FROM notes WHERE userId = '${userId}' AND status = 1` ,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
          console.log("found notes");
          console.log(res);
          result(null, res);
          return;
        }
    
        result({ kind: "not_found" }, {});
      });
}

Note.filterUnDone = (userId, result) => {
  sql.query(`SELECT * FROM notes WHERE userId = '${userId}' AND status = 0` ,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
          console.log("found notes");
          result(null, res);
          return;
        }
    
        result({ kind: "not_found" }, null);
      });
}


Note.status = (note , result) => {
    sql.query("UPDATE notes SET status = ? WHERE id = ? AND userId = ?",
     [ note.status, note.id, note.userId], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log(res)
        console.log("update notes: ", {note});
        result(null, {note});
  });
};

Note.edit = (note , result) => {
  sql.query("UPDATE notes SET ? WHERE id = ? AND userId = ?",
   [ note, note.id, note.userId], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log(res)
      console.log("update notes: ", {note});
      result(null, {note});
});
};


Note.delete = (note, result) => {
    sql.query("DELETE FROM notes WHERE id = ? AND userId = ?",
     [note.id, note.userId], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("delete notes: ", { id: res.insertId, ...note });
        result(null, { id: res.insertId, ...note });
  });
};

Note.deleteAll = ( note , result) => {
  console.log("DELETE ALL")
  sql.query("DELETE FROM notes WHERE userId = ?",[note.userId], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
    
      console.log("delete all notes: ", { id: res.insertId, ...note });
      result(null, { id: res.insertId, ...note });
  });
};

module.exports = Note;
