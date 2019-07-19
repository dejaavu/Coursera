const bcrypt = require('bcrypt');

var express=require("express");
var connection = require('../config/config');

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
        "email":req.session.email,
    };

    if(req.body.dateofbirth){
      userinfo.dateofbirth = req.body.dateofbirth
    }

    connection.query('UPDATE users SET ? WHERE email=?', [userinfo, req.session.email], function (error, results, fields){
      if (error) {
        res.json({
            status: false,
            message: error
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
        name: results[0].name,
        email: results[0].email,
        userlevel: results[0].userlevel,
        dateofbirth: results[0].dateofbirth,
        gender: results[0].gender,
        info: results[0].info
      });
    }
  }
  );
}

module.exports = {
  user,
  userinfo
}
