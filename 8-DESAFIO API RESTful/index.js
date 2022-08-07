const express = require('express');
//const { Router } = express;
const routerProductos = require('./routes/productos.js');//llama a router de productosjs para usarlo

const app = express();
//const router = Router();
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor http escuchando en el puerto ${PORT}`));

server.on('error', err => console.log(`Error en servidor ${err}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use('/api', routerProductos);//maneja todo