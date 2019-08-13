const bcrypt = require('bcryptjs');

var express = require("express");
var connection = require('../config/config');

module.exports.register = function(req, res){

  function validate(form){
    if(form.password !== form.passwordagain){
      res.json({
        status:false,
        message:"Passwords don't match"
      });
      return false;

    }
    if(form.password.length<8){
      res.json({
        status:false,
        message:"Password length less than 8"
      });
      return false;

    }
    emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailregex.test(form.email)){
      res.json({
        status:false,
        message:"Email address has wrong format"
      });
      return false;

    }
    return true;
  }

  if(validate(req.body)){
    (async function(){

      const myPlaintextPassword = req.body.password;
      const saltRounds = 10;
      var hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

      var users = {
          "name":(req.body.name==='' || !req.body.name? 'USER': req.body.name),
          "email":req.body.email,
          "password":hash,
          "userlevel":req.body.userlevel,
      };

      connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
          if (error) {
            res.json({
                status:false,
                message:"Email address already exists"
            });
          } else {
              res.json({
                status:true,
                data:results,
                message:"User registered sucessfully"
            });
          }
        });

      })();
  }

}
