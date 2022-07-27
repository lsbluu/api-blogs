// const express = require('express');
const authService = require('../services/authService');

const authController = async (req, res, next) => {

  const { email, password } = req.body;
  console.log(email, ' controler');
  // const auth = await authService.authenticate(email, password);
  res.status(200).json('auth');
};

module.exports = { authController };