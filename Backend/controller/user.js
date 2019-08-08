const bcrypt = require('bcryptjs');

var express=require("express");
var connection = require('../config/config');

const user = function(req, res){

  function validate(form){
    if (form.name || form.info || form.gender || form.dateofbirth ) {
      return 2;
    } else {
        if(req.file){
          return 1;
        }
        res.json({
          status:false,
          message:"Input atleast one field"
        });
        return 0;
      }
    }


  if(validate(req.body) === 2){
    var userinfo = {
        "name":req.body.name,
        "info":req.body.info,
        "gender":req.body.gender,
        "email":req.session.email,
    };

    if(req.body.dateofbirth){
      userinfo.dateofbirth = req.body.dateofbirth;
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
            message:"Data updated",
        });
      }
    });
  } else {
    if(validate(req.body) === 1){
      res.json({
        status: true,
      });
    }
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
      res.send(
        results[0]
      );
    }
  }
  );
};

const userinfobyemail = function(req, res){
  connection.query('SELECT * FROM users WHERE email=?', req.params.email, function (error, results, fields){
    if (error) {
      res.json({
          status:false,
          message:error
      });
    } else {
      res.send(
        results[0]
      );
    }
  }
  );
}


module.exports = {
  user,
  userinfo,
  userinfobyemail,
}
