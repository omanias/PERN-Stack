npm init -y
npm i express morgan cors
npm i nodemon -D
npm i pg (instalacion de postgres)
npm i dotenv
creamos carpeta 'src' => config.js db.js index.js
creamos carpeta 'routes'
creamos carpeta 'controllers'
creamos carpeta 'database'

En package.json =>
 "scripts": {
"start": "node src/index.js",
"dev":"nodemon src/index.js"
  },


npm run dev => ejecuta el servidor