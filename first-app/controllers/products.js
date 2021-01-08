const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
	// res.send('<form action="/admin/product" method="POST"><input type="text" name="title"> <button type="submit">Add Product</button></form>')
	// res.sendFile(path.join(rootDir, "views", "add-product.html"));
	res.status(200).render('add-product', {pageTitle: "Add Product"});
};


exports.postAddProduct = (req, res, next) => {
	const product = new Product(req.body.title);
	product.save();
	// products.push({'title': req.body.title});
	res.redirect('/');
}

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		console.log(products);
		res.status(200).render('shop', {prods: products, pageTitle: "Shop", hasProducts: products.length > 0});
	});
}