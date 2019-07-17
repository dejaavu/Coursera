const bcrypt = require('bcrypt');

var express = require("express");
var session = require('express-session');
var connection = require('../config/config');

module.exports.login = function(req, res){

  connection.query('SELECT * from users WHERE email=?', req.body.email, function(error,results,fields){
      if(error){
        res.json({
          status: false,
          message: error
        });
      } else {
        if(results.length>0){
          if(bcrypt.compareSync(req.body.password,results[0].password)){
            req.session.loggedin = true;
            req.session.email = req.body.email;
            res.json({
              status: true,
              message: "Login Successful",
            });
          } else {
            res.json({
              status: false,
              message: "Invalid password"
            });
          }
        } else {
          res.json({
            status: false,
            message: "Invalid email"
          });
        }
      }
  });

}
