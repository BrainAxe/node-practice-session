const User = require('../models/user');


exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.getSignup = (req, res, next) => {
	res.render("auth/signup", {
	  path: "/signup",
	  pageTitle: "Signup",
	  isAuthenticated: false,
	});
  };

exports.postLogin = (req, res, next) => {
  User.findById("6015950c11329140086e10bc")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  // res.setHeader('Set-Cookie', 'loggedIn=true');
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};

exports.postSignup = (req, res, next) => {
	
};