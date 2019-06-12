const bcrypt = require('bcrypt');

var express=require("express");
var connection = require('../config/config');

module.exports.register = function(req,res){

  (async function(){
    
    const myPlaintextPassword = req.body.password;
    const saltRounds = 10;
    var hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

    var users = {
        "name":req.body.name,
        "email":req.body.email,
        "password":hash
    };

    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:error
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });

  })();

}
