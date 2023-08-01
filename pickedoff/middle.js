const express = require("express");
const app = express();

function middle(req, res, next) {
    req.customProperty = 'This is a custom property added by the middleware'
    next()
  }
  
  module.exports = middle;
  