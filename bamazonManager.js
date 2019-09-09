var inquirer = require("inquirer");
var mysql = require("mysql")
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "RootRoot22",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("\n"+"connected as ID: "+ connection.threadId + "\n");
});


function start(){
  
  inquirer.prompt([
    {
      
      type: "list",
      name: "managerOptions",
      message: "What are you trying to do?",
      choices: ["View products for sale", "View low inventory", "Add to inventory", "Add new product", "Quit"]
    
  }
]).then(function(res){
 
  switch(res.managerOptions) {
    case 'View products for sale':
      return products();
    case 'View low inventory':
      return lowInventory();
    case 'Add to inventory':
      return  addInventory();
    case 'Add new product':
      return newProduct()
    case "Quit":
      return connection.end();
        }
        
      })
    }
start();
  
function products(){
          var query = "SELECT * FROM products";
          connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    start()
  })
}

function lowInventory() {
  var query = "SELECT * FROM products WHERE stock_quantity<=5";
  connection.query(query, function(err, res) {
    if (err) throw err;
   console.table(res);
   console.log("--------------------------------- \n");
   start()
  })
}


function addInventory() {

  connection.query("SELECT item_id, product_name, stock_quantity FROM products", function(err, response){
    if (err) throw err;
    console.table(response);   

    inquirer.prompt(
      [
        { 
          type: "input",
          name: "itemAdd",
          message: "To ADD inventory, chose the item_id",
          
        },
        {
          type: "input",
          name: "volAdd",
          message: "How many do you want to add to inventory?"
        }
        
        
      ])
      .then(function(answer){
       
        var volToAdd = parseInt(answer.volAdd)
        // console.log("vol to add", volToAdd);
        var query = "SELECT item_id, stock_quantity FROM products WHERE ?";
      connection.query(query, {item_id:answer.itemAdd}, function(err, res){
        for(let i=0; i<res.length; i++){
          // console.log("stockquantity", res[i].stock_quantity);
          // console.log("ID of Item: ", res[i].item_id );
          add(volToAdd, res[i].stock_quantity, res[i].item_id)
        }
        
      })
          
      })

      }
      )}
      
function add(volAdd,stockQuant, itemid){
  var updatedInventory = volAdd + stockQuant;
  var query = "UPDATE products SET ? WHERE ?;";
  var plugin = [{
    stock_quantity:updatedInventory
  }, 
{
  item_id:itemid
}]
connection.query(query, plugin, function(err, res){
  if (err) throw err;
  console.log("your product was added");
  console.log("--------------------------------- \n");
start()
})
}


function newProduct(){
  inquirer.prompt(
    [
      { 
        type: "input",
        name: "newItem",
        message: "What is the product name you wish to add?",
        
      },
      { 
        type: "input",
        name: "newID",
        message: "What is the new product ID?",
        
      },
      { 
        type: "input",
        name: "newDept",
        message: "Which department does this new product belong to?",
        
      },
      { 
        type: "input",
        name: "newPrice",
        message: "What is the new product price?",
        
      },
      {
        type: "input",
        name: "newQuantity",
        message: "How many of the new product do you wish to add to inventory?"
      }
    ])
    .then(function(answer){

var query = "INSERT INTO products SET ?";
var plugin = [
  {
    item_id:answer.newID,
    product_name: answer.newItem,
    department_name: answer.newDept,
    price: answer.newPrice,
    stock_quantity: answer.newQuantity
  }
]
connection.query(query, plugin, function(err, res){
  if (err) throw err;
  console.log(res);
  start()
  console.log("--------------------------------- \n");
})
 start()
    })
  }