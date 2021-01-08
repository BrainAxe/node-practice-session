const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

module.exports = class Product {
	constructor(t) {
		this.title = t;
	}

	save() {
		fs.readFile(p, (err, fileContent) => {
			let products = [];
			if (!err) {
				products = JSON.parse(fileContent);
				console.log(fileContent);
			}
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.log(err);
			});
		})
		// products.push(this);
	}

	static fetchAll(cb) {
		fs.readFile(p, (err, fileContent) => {
			if (err) {
				return cb([]);
			}
			return cb(JSON.parse(fileContent));
		})
	}
}