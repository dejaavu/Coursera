var express = require("express");

module.exports.logout = function(req, res){

    req.session.destroy(
      err => {
        if(err){
          res.json({
            status: false,
            message: "User not logged in",
          });
        } else {
          res.json({
            status: true,
            message: "User logged out",
          });
        }
    });

}
