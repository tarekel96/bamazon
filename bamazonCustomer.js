var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  // port: 3307,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
});

connection.query(
  "SELECT * FROM bamazon_DB.products",
  function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  }
);


