const bcrypt = require('bcrypt');

var express=require("express");
var connection = require('../config/config');
var info = require('../config/info');

const user = function(req, res){

  function validate(form){
    if (form.name || form.info || form.gender || form.dateofbirth) {
      return true;
    } else {
      res.json({
        status:false,
        message:"Input atleast one field"
      });
      return false;
    }
  }

  if(validate(req.body)){
    var userinfo = {
        "name":req.body.name,
        "info":req.body.info,
        "gender":req.body.gender,
        "dateofbirth":req.body.dateofbirth,
        "email":req.session.email,
    };

    connection.query('INSERT INTO users SET ?',userinfo, function (error, results, fields){
      if (error) {
        res.json({
            status:false,
            message:error
        });
      } else {
          res.json({
            status:true,
            data:results,
            message:"Data updated"
        });
      }
    });
  }
};

const userinfo = function(req, res){
  connection.query('SELECT * FROM users WHERE email=?', req.session.email, function (error, results, fields){
    if (error) {
      res.json({
          status:false,
          message:error
      });
    } else {
      res.send({
        results
      });
    }
  }
  );
}

module.exports = {
  user,
  userinfo
}
