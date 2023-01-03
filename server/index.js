const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Para la precarga de nuestra DB cuando se levanta el server, se puede ejecutar la funcion getEpisodes() que deberán armarla ustedes. Dicha función nos cargaría todos los personajes en nuestra DB una vez que se inicia el servidor. Tener en cuenta que como es un pedido a la API, debería ser asíncrona.

conn.sync({ force: true }).then(() => {
  // getEpisodes();
  server.listen(3001, () => {
    console.log("Listening at 3001"); // eslint-disable-line no-console
  });
});
