const verifyToken = require ("../controller/helpersAuth.js");

const checkAuth = async (req, res, next) => {
  try {
    // capturar solo el token
    const token = req.headers.authorization.split(' ').pop()
    const tokenData = verifyToken(token)

    if (tokenData) {
      next()
    } else {
      res.status(409)
      res.send({error: "Autentificación denegada"})
    }
  } catch (e) {
    res.status(409)
    res.send({error: "Autentificación denegada"})
  }
}

module.exports = checkAuth; 