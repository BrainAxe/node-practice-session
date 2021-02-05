const User = require('../models/user');


exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};
exports.postLogin = (req, res, next) => {
  User
    .findById("6015950c11329140086e10bc")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.postLogOut = (req, res, next) => {
  // res.setHeader('Set-Cookie', 'loggedIn=true');
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};