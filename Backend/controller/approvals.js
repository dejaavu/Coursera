const bcrypt = require('bcryptjs');

var express=require("express");
var connection = require('../config/config');

module.exports.addcourse = function(req, res){

  function validate(form){
    if (form.name && form.branch && form.info) {
      return true;
    } else {
      res.json({
        status:false,
        message:"Input all the fields"
      });
      return false;
    }
  }

  if(validate(req.body)){

    var courseinfo = {
        "name":req.body.name,
        "branch":req.body.branch,
        "uploader":req.session.email,
        "info":req.body.info,
    };

    connection.query('INSERT INTO approvals SET ?',courseinfo, function (error, results, fields){
      if (error) {
        res.json({
            status:false,
            message:error
        });
      } else {
          res.json({
            status:true,
            data:results,
            message:"Course added"
        });
      }
    });
  }
}

  module.exports.deletecourse = function(req, res) {
    connection.query(`DELETE FROM courses WHERE id=?`, req.params.id, function(error, results, fields) {
      if(error){
        res.json({
          status: false,
          message: error
        });
      } else {
          res.json({
            status: true,
            message: "Course deleted"
          });
      }
    });
  }

  module.exports.getapproval = function(req, res) {
    if(req.query.uploader){
      connection.query('SELECT * FROM approvals where uploader=?', req.query.uploader, function(error, results, fields){
        if(error){
          res.json({
            status: false,
            message: error
          });
        } else {
            res.send(
              results
            );
        }
      });
    }
  }
