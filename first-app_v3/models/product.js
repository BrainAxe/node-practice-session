const db = require('../util/database');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
	const text = 'INSERT INTO products (title, price, description, imageUrl) VALUES ($1, $2, $3, $4)';
	const values = [this.title, this.price, this.description, this.imageUrl];
	return db.query(text, values);
  }

  static deleteById(id) {

  }

  static fetchAll() {
	return db.query('SELECT * FROM	 products')
  }

  static findById(id) {
	return db.query('SELECT * FROM products WHERE products.id = $1', [id]);
  }
};
