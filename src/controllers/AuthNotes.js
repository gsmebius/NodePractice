const { Puser } = require("../models/puser.js");
const {encrypt, compare} = require("../helperAuth.js");

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
  } catch (e) {
    return null
  }
}

module.exports = { signUp, signIn };






const { Puser } = require("../models/puser.js");
const jwt = require("jsonwebtoken");
const {encrypt, compare} = require("../helperAuth.js");

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

      res.send ({ registerUser });

      // jwt.sign ({Puser}, 'secretkey', {expiresIn: '32s'}, (err, token)=> {
      //   res.json ({
      //     token
      //   })
      // });

  } catch (err) {
      console.log(err);
  }
}

// Ingresar
signIn = async (req, res) => {

  let { userName, email, password } = req.body;

  try {
      const Puser = await Puser.findOne({
          where: {
              email
          }
      }).then(Puser => {
        if (!Puser) {
          res.status(404).json({msg: "usuario no encontrado"});
        } else {
          if (bcrypt.compareSync(password, Puser.password)) {
            jwt.sign ({Puser}, 'secretkey', {expiresIn: '32s'}, (err, token)=> {
              res.json ({
                token
              })
            });
          }else {
            res.status(401).json({msg: "contraseña incorrecta"});
          }
        }
      }).catch(err => {
        res.status(500).json(err);
      });

      res.send(book);
  } catch (err) {
      console.log(err);
  }
}

module.exports = { signUp, signIn }