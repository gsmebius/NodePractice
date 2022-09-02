// JsonWebTokens jwt


// Cuando haya sign se genera el token
// El expiresIn es para expirar el Token y si no se desea poner solo se omite
jwt.sign({ user }, 'secretkey', { expiresIn: '32s' }, (err, token) => {
  res.json({
    token
  })
});


// Función de verificación si el usuario a mandado Token
// el token genera la palabra bearer más el codigo del token
function verifyToken(req, res, next) {
  // el header de authorizacion visto en postman
  const bearerHeader = req.headers['authorizarion'];
  // Si la autorización es diferente se extraerá el token
  if (typeof bearerHeader !== 'undefined') {
    // Se toma el toquen y con split se separa la palabra bearer del code mediant eun espacio vacío
    // luego con la cadena [1], se manda a llamar la posición 1, o sea colo el code del token
    const bearerToken = bearerHeader.split("")[1];
    // Aquí se llama al token puro
    req.token = bearerToken;
    next();
  } else {
    // error si no hay Token detectado
    res.sendStatus(403);
  }
}


// Ejemplo de Ruta
// verifyToken es la función creada
app.post("api/post", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretKey", (error, authData) => {
    if (error) {
      res.sendStatus(403);
    } else {
      res.json({
        mensaje: "funcinó",
        authData
      });
    }
  });
});


// bcrypt encriptar contraseña

hooks: {
  beforeCreate: async (user) => {
    if (user.password) {
      const salt = await bcrypt.genSaltSync(10, 'a');
      user.password = bcrypt.hashSync(user.password, salt);
    }}}