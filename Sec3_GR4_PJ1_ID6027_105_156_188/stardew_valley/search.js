const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const db =  mysql.createConnection({
    host: "localhost",
    user: "itcs212",
    password: "itcs212",
    database: "stardew"
})

//CRUD for product management
app.get('/information', (req, res) => {
    db.query("SELECT * FROM NPC", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/create", (req, res) => {
  let NPC_ID = req.body.NPC_ID;
  let NPC_name = req.body.NPC_name;
  let NPC_season = req.body.NPC_season;
  let NPC_bd = req.body.NPC_bd;
  let NPC_home = req.body.NPC_home;
  let NPC_gender = req.body.NPC_gender;
  let NPC_status = req.body.NPC_status;

  db.query(
    "INSERT INTO NPC (NPC_ID, NPC_name, NPC_season, NPC_bd, NPC_home, NPC_gender, NPC_status) VALUES (?,?,?,?,?,?,?)",
    [NPC_ID, NPC_name, NPC_season, NPC_bd, NPC_home, NPC_gender, NPC_status],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Added successfully.");
      }
    }
  );
});

  
app.put("/update", (req, res) => {
  let NPC_ID = req.body.NPC_ID;
  let NPC_name = req.body.NPC_name;
  let NPC_season = req.body.NPC_season;
  let NPC_bd = req.body.NPC_bd;
  let NPC_home = req.body.NPC_home;
  let NPC_gender = req.body.NPC_gender;
  let NPC_status = req.body.NPC_status;

  db.query(
    "UPDATE NPC SET NPC_name = ?, NPC_season = ?, NPC_bd = ?, NPC_home = ?, NPC_gender = ?, NPC_status =? WHERE NPC_ID = ?",
    [NPC_name, NPC_season, NPC_bd, NPC_home, NPC_gender, NPC_status, NPC_ID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
  
  app.delete("/delete/:id", (req, res) => {
    let NPC_ID = req.params.id;
    db.query("DELETE FROM NPC WHERE NPC_ID = ?", NPC_ID, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

//------------------------------------------------------------------------------
//CRUD for user management
app.get('/user_info', (req, res) => {
    db.query("SELECT * FROM user_info", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/creates", (req, res) => {
  let User_ID = req.body.User_ID;
  let Firstname = req.body.Firstname;
  let Lastname = req.body.Lastname;
  let Birthdate = req.body.Birthdate;
  let User_mail = req.body.User_mail;
  let Password = req.body.Password;

  db.query(
    "INSERT INTO user_info (User_ID, Firstname, Lastname, Birthdate, User_mail, Password) VALUES (?,?,?,?,?,?)",
    [User_ID, Firstname, Lastname, Birthdate, User_mail, Password],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Added successfully.");
      }
    }
  );
});

app.put("/updates", (req, res) => {
  let User_ID = req.body.User_ID;
  let Firstname = req.body.Firstname;
  let Lastname = req.body.Lastname;
  let Birthdate = req.body.Birthdate;
  let User_mail = req.body.User_mail;
  let Password = req.body.Password;

  db.query(
    "UPDATE user_info SET Firstname = ?, Lastname = ?, Birthdate = ?, User_mail = ?, Password =? WHERE User_ID = ?",
    [Firstname, Lastname, Birthdate, User_mail, Password, User_ID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/deletes/:id", (req, res) => {
  let User_ID = req.params.id;
  db.query("DELETE FROM user_info WHERE User_ID = ?", User_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//set port
app.listen(port, () =>  {
    console.log(`Server listening at Port ${port}`);
});
