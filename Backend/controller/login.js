const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var express=require("express");
var connection = require('../config/config');

module.exports.login = function(req, res){

  connection.query('SELECT * from users WHERE email=?',req.body.email,function(error,results,fields){
      if(error){
        res.json({
          status: false,
          message: error
        });
      } else {
        if(results.length>0){
          if(bcrypt.compareSync(req.body.password,results[0].password)){
            var user = {
              email: req.body.email
            }
            jwt.sign(user, 'privkeyMUSTCHANGELATER', { expiresIn: 15*60 }, (err,token) => {
              if(err){
                res.json({
                  status:false,
                  message: err
                });
              } else {
                res.json({
                  status: true,
                  token: token
                });
              }
            })
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
