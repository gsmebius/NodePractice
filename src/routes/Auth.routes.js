const express = require('express');

const {
  signIn,
  signUp } = require('../controllers/AuthController.js');

// Init express router
const router = express.Router();

router.post('/suscribe', signUp);

router.post('/login', signIn);
