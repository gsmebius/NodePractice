const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const encrypt = async (text) => {
  // el 10 es el salt y tiene que ver con la cantidad de aleatoridad del hash
  const hash = await bcrypt.hash(text, 10)
  return hash 
}

const compare = async (pass, hash) =>  {
  return await bcrypt.compare(pass, hash)
}

const tokenSign = async (user) => {
  return jwt.sign(
    // Token original de nuestro sistema
    process.env.JWT_KEY,
    {
      ExpiresIn : "2h"
    });
}

const verifyToken = async (token) => {
  try {
  // verifica si el token si lo hemos generado nosotros 
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (e) {
    return null
  }
}


module.exports = {encrypt, compare};

