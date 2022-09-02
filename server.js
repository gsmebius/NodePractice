const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3000;
// seguridad para solo servir en el dominio 
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// Require books routes


// const apiRoutes = require('./src/routes/Auth.routes.js')
// app.use('/api', apiRoutes);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});