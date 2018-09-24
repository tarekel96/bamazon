var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
console.log("connected as " + connection.threadId)
start(); 
 });

 function start() {
   connection.query("SELECT * FROM products", function(err, results) {
     if(err) throw err;
  inquirer
  .prompt([
    {
    name: "product",
    type: "rawlist",
    message: "Which item would you like to purchase?",
    choices: function() {
      console.log(results);
      var choiceArray = [];
      for (var i = 0; i < results.length; i++) {
        choiceArray.push(results[i].product_name);
      }
      return choiceArray;
    }
  }
])
.then(function(answer) {
  // get the information of the chosen item
  var chosenItem;
  for (var i = 0; i < results.length; i++) {
    if (results[i].product_name === answer.product) {
      chosenItem = results[i];
      amount();
      return(chosenItem);
    } 
  }
})
}
)};

function amount() {
  connection.query("SELECT * FROM products", function(err, results) {
    if(err) throw err;
 inquirer
 .prompt([
   {
   name: "amount",
   type: "input",
   message: "How many units would you like?",
}
])
.then(function(answer) {
  for (var i = answer.amount; i < results.length; i++) {
    if(answer.amount > results[i].stock_quantity) {
      console.log("Error. Invalid input amount.")
    } else {
      var total = answer.amount * results[answer.amount].costumer_price;
      console.log(answer.amount + " " + results[answer.amount].product_name +"s will cost " + total);
    };
  }
  })
})
};


   /*  choices: function() {
      var choiceArray = [];
      for (var i = 0; i < results.length; i++) {
        choiceArray.push(results[i].product_name);
      }
      return choiceArray;
    } */
/*       console.log(answer.product);
 */       /*  if(results.product_name === answer.product)
          console.log(answer.product); */
       
 
/* .then(function(answer) {
  // get the information of the chosen item
   var chosenItem = answer;
   for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
     console.log(chosenItem);
   }
}) */


    /* {
    name: "amount",
    message: "How many units would you like to purchase?",
    type: "input",
    }
  ])
.then(function(answer) {
  if(answer.amount > choiceArray) {
    console.log("Error. Invalid input amount.")
  } else {
    var total = answer.amount * results[i].costumer_price;
    console.log(total);
  };
  });
 });
} */