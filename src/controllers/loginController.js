// const express = require('express');
const authService = require('../services/authService');

const authController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
  const token = await authService.authenticate(email, password);
  
  res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { authController };