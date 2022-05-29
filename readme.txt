INSTALACIONES
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



npx create-react-app client

Para ignorar node-modules y demas y no bservarlos en el listado de archivos se crea un "workspace JSON" donde se incluyen los archivos que no se mostraran:

{
    "files.exclude":{
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/Thumbs.db": true,
        "node_modules": true,
        "client/node_modules": true,
    }
}


Una vez iniciado el proyecto de React se incorpora la carpeta "components" donde se comienzan a insertar los componentes.


npm run start => Ejecuta el proyecto

INSTALACIONES
npm i react-router-dom
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

