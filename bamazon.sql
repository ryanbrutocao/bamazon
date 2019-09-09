CREATE DATABASE IF NOT EXISTS bamazon DEFAULT CHARSET = utf8;
USE bamazon;

drop table if exists products; 

CREATE TABLE products (
item_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(255) DEFAULT NULL,
department_name VARCHAR(255) DEFAULT NULL,
price INT(10) DEFAULT NULL,
stock_quantity INT(10) DEFAULT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (1, 'Chardonnay', 'beverages', 17, 120);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (2, 'Zinfandel', 'beverages', 30, 120);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (3, 'Cabernet', 'beverages', 34, 120);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (4, 'Pinot Noir', 'beverages', 34, 120);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (5, 'Merlot', 'beverages', 24, 120);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (6, 'Sauvignon Blanc', 'beverages', 16, 120);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (7, 'Wine Glasses', 'kitchenware', 15, 24);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (8, 'Cork Screw', 'kitchenware', 12, 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (9, 'Cheese', 'food', 6.95, 15);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (10, 'Salami', 'food', 7.45, 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (11, 'Crackers', 'food', 2.85, 35);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (12, 'Grapes', 'food', 3.50, 25);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (12, 'fish', 'food', 3.50, 25);

SELECT * FROM products;
select stock_quantity from products where item_id=3;