const bcrypt = require('bcrypt');

var express=require("express");
var connection = require('../config/config');

module.exports.addcourses = function(req, res){

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
        "id":req.params.id,
        "name":req.body.name,
        "branch":req.body.branch,
        "uploader":req.session.email,
        "info":req.body.info,
    };

    connection.query('INSERT INTO courses SET ?',courseinfo, function (error, results, fields){
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

module.exports.courseinfo = function(req, res){

  connection.query('SELECT * FROM courses WHERE id=?', req.params.id, function (error, results, fields){
    if (error) {
      res.json({
          status:false,
          message:error
      });
    } else if(results.length>0) {
      res.json({
        status: true,
        data: results,
        message: "Course retrieved"
      });
    } else {
      res.json({
          status:false,
          message:"Course not found"
      });
    }
  });
}

module.exports.updatecourse = function(req, res){

  var courseinfo = {
      "uploader":req.session.email,
  };

  if(req.body.name){
    courseinfo.name = req.body.name;
  }
  if(req.body.branch){
    courseinfo.branch = req.body.branch;
  }
  if(req.body.info){
    courseinfo.info = req.body.info;
  }
  connection.query('UPDATE courses SET ? WHERE id=?',[courseinfo,req.params.id], function (error, results, fields){
    if (error) {
      res.json({
          status:false,
          message:error
      });
    } else {
        res.json({
          status:true,
          data:results,
          message:"Course updated"
      });
    }
  });
}

module.exports.deletecourse = function(req, res) {
  connection.query(`DELETE FROM courses WHERE id=?`, req.params.id, function(error, results, fields) {
    if(error){
      res.json({
        status: false,
        message: error
      });
    } else if(results.length>0) {
        res.json({
          status: true,
          message: "Course deleted"
        });
    } else {
      res.json({
          status:false,
          message:"Course not found"
      });
    }
  });
}

module.exports.getcourses = function(req, res){
  if(req.query.branch){
    connection.query('SELECT * FROM courses where branch=?', req.query.branch, function(error, results, fields){
      if(error){
        res.json({
          status: false,
          message: error
        });
      } else {
        if(results.length>0){
          res.json({
            status: true,
            data: results,
            message: "Courses retrieved"
          });
        } else {
          res.json({
            status: false,
            message: "No courses found"
          });
        }
      }
    });
  }
}
