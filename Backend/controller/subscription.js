const bcrypt = require('bcrypt');

var express=require("express");
var connection = require('../config/config');

module.exports.subscription = function(req, res) {
  var sql = "SELECT A.`id` ,A.`info` ,A.`name` , A.`branch` , A.`uploader` ,B.`email` FROM `courses`AS A INNER JOIN `usersubscriptions` AS B ON B.`id` = A.`id` WHERE B.`email`=?"
  connection.query(sql, req.session.email, function(error, results, fields) {
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

module.exports.getsubbyid = function(req, res) {
  var stmt = `SELECT * FROM usersubscriptions WHERE email=? AND id=?`
  connection.query(stmt, [req.session.email, req.params.id], function(error, results, fields) {
    if(error){
      res.json({
        status: false,
        message: error
      });
    } else {
        res.send(
          [results.length]
        );
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
