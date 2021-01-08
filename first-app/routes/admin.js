const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const router = express.Router();

// const products = [];

router.get('/add-product', productsController.getAddProduct
	// (req, res, next) => {
	// res.send('<form action="/admin/product" method="POST"><input type="text" name="title"> <button type="submit">Add Product</button></form>')
	// res.sendFile(path.join(rootDir, "views", "add-product.html"));
	// res.status(200).render('add-product', {pageTitle: "Add Product"});
// }
);

router.post('/add-product', productsController.postAddProduct
// (req, res, next) => {
// 	products.push({'title': req.body.title});
// 	res.redirect('/');
// }
);

module.exports = router;
// exports.routes = router;
// exports.products = products;