const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3');

const app = express();

app.use(cors({
  origin: '*',
}));

app.use(express.json())

let db = new sqlite3.Database('C:/sqlite/database.db', (err) => {
  if(err) {
    return console.log(err.message);
  } else {
    console.log("Connected to the database.");
  }
});

async function getAllTodoItems() {
  return new Promise((resolve, reject) => {
    db.serialize( function () {
      db.all("SELECT * FROM todoItems", function (err, row) {
        // console.log(row);
        resolve(row);
      })
    })
  })
}

app.get("/items", (req, res) => {
  getAllTodoItems().then(d => res.end(JSON.stringify(d)))
})

let port = 4000;

app.listen(port);
