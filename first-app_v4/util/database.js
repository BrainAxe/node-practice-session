const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db; // UnderScore is just a signal that this will only use in this file

const mongoConnect = (callback) => {
	MongoClient.connect('mongodb+srv://tanzim:9ggZnKuD6BY@cluster0.99q9l.mongodb.net/shop?retryWrites=true&w=majority')
	.then(client => {
		console.log("Connected!");
		_db = client.db();
		callback();
	})
	.catch(err => {
		console.log(err);
		throw err;
	});
};

const getDb = () => {
	if (_db) {
		return _db;
	}
	throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
