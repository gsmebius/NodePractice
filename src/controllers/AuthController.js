const { Puser } = require("../models/puser.js");
const {encrypt, compare} = require("../controllers/helperAuth.js");

// Registrarse
signUp = async (req, res) => {
  try {
      const {userName, email, password} = req.body

      const passwordHash = encrypt(password)
      const registerUser = await Puser.create({
        userName,
        email,
        password : passwordHash
      });
      const tokenSession = await tokenSign(registerUser);
      res.send({
        registerUser,
        tokenSession
      });
  } catch (err) {
      console.log(err);
  }
}

// Ingresar
signIn = async (req, res) => {

  let { email, password } = req.body;

  try {
    const user = await Puser.findOne({email});
    if (!user) {
      res.status(404).json({msg: "usuario no encontrado"});
    } 
    const checkpass = await compare(password, passwordHash);
    const tokenSession = await tokenSign(user);

    if (!checkpass) {
      res.status(404).json({msg: "contraseña incorrecta"});
    } 

    if (checkpass) {
      res.send({
        user,
        tokenSession
      });
    } return 
  } catch (err) {
    console.log(err);
  }
}

module.exports = { signUp, signIn };