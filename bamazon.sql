
DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products
(

    -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
    item_id INTEGER
(11)
    AUTO_INCREMENT NOT NULL,
  product_name VARCHAR
    (100),
    department_name VARCHAR
    (100),
    costumer_price DECIMAL
    (10,3),
    stock_quantity INTEGER
    (11),
  PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, department_name, costumer_price, stock_quantity)
    VALUES
        ("iPhone case", "accessories", 19.99, 100);

    INSERT INTO products
        (product_name, department_name, costumer_price, stock_quantity)
    VALUES
        ("basketball", "athletics", 29.99, 20);

    INSERT INTO products
        (product_name, department_name, costumer_price, stock_quantity)
    VALUES
        ("notebook", "school", 2.99, 300);

    INSERT INTO products
        (product_name, department_name, costumer_price, stock_quantity)
    VALUES
        ("iPhone charger", "accessories", 9.99, 80);

    INSERT INTO products
        (product_name, department_name, costumer_price, stock_quantity)
    VALUES
        ("novel", "books", 11.99, 10);

    INSERT INTO products
        (product_name, department_name, costumer_price, stock_quantity)
    VALUES
        ("Star Wars", "DVD", 19.99, 25);

    INSERT INTO products
        (product_name, department_name, costumer_price, stock_quantity)
    VALUES
        ("Nike Rosche", "shoes", 49.99, 60);

    INSERT INTO products
        (product_name, department_name, costumer_price, stock_quantity)
    VALUES
        ("AA battery", "misc", 3.99, 50);

    INSERT INTO products
        (product_name, department_name, costumer_price, stock_quantity)
    VALUES
        ("Nike socks", "clothes", 9.99, 18);

    INSERT INTO products
        (product_name, department_name, costumer_price, stock_quantity)
    VALUES
        ("Banana", "food", 0.99, 120);

    SELECT *
    FROM bamazon_DB.products;