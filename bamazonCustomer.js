var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "RootRoot22",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as ID: "+ connection.threadId + "\n");
});


function displayItems(){
  connection.query("SELECT item_id, product_name, price FROM products", function(err, response){
    if (err) throw err;
    console.table(response);
    listItems();
  })
}
displayItems()


function listItems(){
  inquirer.prompt([
    { 
      type: "input",
      name: "itemID",
      message: "What is the ID of the product you wish to buy?",
      
      },
      { 
        type: "input",
        name: "unitVol",
        message: "How many units of the product would you like to buy?"
      }
    ])
    .then(function(answer){
      console.log("answer: ",answer);
      // console.log("vol:" , answer.unitVol);
      var query = "SELECT * FROM products WHERE ?";
      connection.query(query, {item_id: answer.itemID}, function(err, res) {
        if (err) throw err;
        for (let i=0; i<res.length; i++){
          // console.log("ID Response: ",res[i]);
          console.log("stock quantity: ", res[i].stock_quantity);
          if (answer.unitVol<=res[i].stock_quantity){
            console.log("yay you can buy this product");
            order(parseInt(answer.unitVol), res)
          } else {
            console.log("There is not enough of the product in stock");
            displayItems()
          }
        }
      })
      // connection.end();
    }
    )
  
}  

function order (unit_vol, data){
console.log("data", data[0]);
console.log("order volume", unit_vol);
console.log("item ID: ", data[0].item_id);
var updatedQuantity = data[0].stock_quantity - unit_vol;
console.log("updated quantity: ",updatedQuantity);
var query = "UPDATE products SET ? WHERE ?;";
var plugin = [{
  stock_quantity: updatedQuantity,
},
{
  item_id: data[0].item_id
}]
connection.query(query,plugin, function(err, res) {
  if (err) throw err;
  console.log("The total cost of your purchase is: $", unit_vol*data[0].price);
  displayItems()
} )
}