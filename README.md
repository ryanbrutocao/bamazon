# bamazon
Homework 12

# Bamazon Homework

#### The goals of bamazonCustomer.js are listed below:

* Create a MySQL Database called bamazon.
* Then create a Table inside of that database called products.
* The products table should have each of the following columns:

1. item_id (unique id for each product)
1. product_name (Name of product)
1. department_name
1. price (cost to customer)
1. stock_quantity (how much of the product is available in stores)

* Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
* Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
* The app should then prompt users with two messages.
1. The first should ask them the ID of the product they would like to buy.
1. The second message should ask how many units of the product they would like to buy.

* Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

* If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

* However, if your store does have enough of the product, you should fulfill the customer's order.

* Once the update goes through, show the customer the total cost of their purchase.
![Example](/images/bamazon_part_1_order.PNG)


#### The goals of bamazonManager.js are listed below:
Create a new Node application called bamazonManager.js. Running this application will:


* List a set of menu options:
1. View Products for Sale
1. View Low Inventory
1. Add to Inventory
1. Add New Product

* If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
![View Products](/images/view_product.PNG)


* If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
![Low Inventory](/images/low_inventory.PNG)


* If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
![Add Inventory](/images/add_inventory.PNG)


* If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.
![Add New Product](/images/add_product.PNG)




