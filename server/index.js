require('dotenv').config();
const server = require("./src/conexion/app.js");
const { conn } = require("./src/conexion/db.js");

const port = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Listening at ${port} ` ); 
  });
});
