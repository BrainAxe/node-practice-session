const path = require('path');

const express = require('express');

// const adminData = require('./admin');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts
	// (req, res, next) => {
	// res.send('<h1>Hello from Express!</h1>')
	// const products = adminData.products;
	// res.render("shop", {prods: products, docTitle: "Shop"});
	// res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
	// res.status(200).render('shop', {prods: products, pageTitle: "Shop", hasProducts: products.length > 0});
// }
);

module.exports = router;