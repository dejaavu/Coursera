const bcrypt = require('bcryptjs');

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
var result;
var con;
var resp;

module.exports.getcoursesbyid = function(req, res){
  connection.query('SELECT * FROM modules WHERE id=?', req.params.id, function (error, results, fields){
    if (error) {
      res.json({
          status:false,
          message:error
      });
    } else if(results.length>0) {
        result = results;
    } else {
      res.json({
          status:false,
          message:"Module not found"
      });
    }
  });

  connection.query('SELECT * FROM courses WHERE id=?', req.params.id, function (error, results, fields){
    if (error) {
      res.json({
          status:false,
          message:error
      });
    } else if(results.length>0) {
      con = result.concat(results);
      res.json({
        status: true,
        message: con
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
        resp = results;
    }
  });

  if(req.body.oldname){
    var found=0;
    connection.query('SELECT * FROM modules WHERE modname=?',req.body.oldname, function (error, results, fields){
      if (error) {
        res.json({
            status:false,
            message:error
        });
      } else if(results.length>0) {
        var moduleinfo = {
          "modname": req.body.modname
        };
        connection.query('UPDATE modules SET ? WHERE modname=?',[moduleinfo,req.body.oldname], function (error, results, fields){
          if (error) {
            res.json({
                status:false,
                message:error
            });
          } else {
              res.json({
                status:true,
                data:results,
                data2:resp,
                message:"Module updated"
            });
          }
        });
      } else {
        console.log(found);
        res.json({
          status:false,
          message:"Enter valid old module name"
        });
      }
    });
  } else {
      var moduleinfo = {
        "id": req.params.id,
        "modname": req.body.modname
      };
      connection.query('INSERT INTO modules SET ?',moduleinfo, function (error, results, fields){
        if (error) {
          res.json({
            status:false,
            message:"Module already exists"
          })
        } else {
            res.json({
              status:true,
              data:results,
              data2:resp,
              message:"Module added"
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

module.exports.getcourses = function(req, res){
  if(req.query.branch){
    connection.query('SELECT * FROM courses where branch=?', req.query.branch, function(error, results, fields){
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
  } else {
    connection.query('SELECT * FROM courses where uploader=?', req.session.email, function(error, results, fields){
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
