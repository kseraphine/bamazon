var inquirer = require('inquirer');
var mysql =  require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Ih1ha1d!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id: " + connection.threadId);
});

connection.query("SELECT * FROM bamazon.products", function(err, res) {
  if(err) {
    console.log(err);
  }else {
    console.log("List of available products:")
    for (var i = 0; i < res.length; i++) {
      console.log("Item ID: " + res[i].itemID + " | " + "Product: " + res[i].productName + " | " + "Price: $" + res[i].price);
    }
  }
  connection.end();
});

var buyStuff = function() {
  connection.query("SELECT * FROM bamazon.products", function(err, res){
    inquirer.prompt({
      name: "choice",
      type: "rawlist",
      choices: function(items) {
        var itemsArray = [];
        for (var i = 0; i < res.length; i++) {
          itemsArray.push(res[i].itemID)
        }
        return itemsArray;
      },
      message: "Enter the item ID for the item you would like to buy:"
  }).then(function(answer) {
    for (var i = 0; i < res.length; i++) {
      if (res[i].itemID)
    }
  })


  })
}
