const bcrypt = require('bcrypt');

var express=require("express");
var connection = require('../config/config');

module.exports.subscription = function(req, res) {
  connection.query('SELECT * FROM usersubscriptions WHERE email=?', req.session.email, function(error, results, fields) {
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
          message: "Subscriptions returned"
        });
      } else {
          res.json({
            status: false,
            message: "No email found"
          });
      }
    }
  });
}

module.exports.addsub = function(req, res) {
  var stmt = `INSERT INTO usersubscriptions(email, id)
              VALUES (?, ?)`
  connection.query(stmt, [req.session.email, req.params.id], function(error, results, fields) {
    if(error){
      res.json({
        status: false,
        message: error
      });
    } else {
        res.json({
          status: true,
          message: "Subscription added"
        });
    }
  });
}

module.exports.removesub = function(req, res) {
  var stmt = `DELETE FROM usersubscriptions WHERE id=?`
  connection.query(stmt, req.params.id, function(error, results, fields) {
    if(error){
      res.json({
        status: false,
        message: error
      });
    } else {
        res.json({
          status: true,
          message: "Subscription deleted"
        });
    }
  });
}
