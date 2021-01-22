const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
	MongoClient.connect('mongodb+srv://tanzim:9ggZnKuD6BY@cluster0.99q9l.mongodb.net/<dbname>?retryWrites=true&w=majority')
	.then(client => {
		console.log("Connected!");
		callback(client);
	})
	.catch(err => console.log(err));
};

module.exports = mongoConnect;
