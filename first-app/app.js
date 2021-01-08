// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs({
	extname: "hbs",
	defaultLayout: "",
	layoutsDir: "",
 }));
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404
	// (req, res, next) => {
	// res.status(404).send('<h1>Page Not Found</h1>')
	// res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
// 	res.status(404).render('404', {pageTitle: "Page Not Found"});
// }
);

// app.use((req, res, next) => {
// 	console.log("In the middleware now!");
// 	next();
// });

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000)
