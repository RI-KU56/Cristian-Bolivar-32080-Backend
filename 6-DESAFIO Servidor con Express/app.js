const Contenedor = require('./Contenedor.js');
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
const server = app.listen(process.env.PORT || PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

const productos = new Contenedor('productos.txt');

app.get('/', async (req, res) => {
    res.send({ mensaje: 'hola mundo' })
});

//endpoint (ruta) a /productos
app.get('/productos', async (req, res) => {
    const mostrarProductos = await productos.getAll();
    res.send(mostrarProductos);
})

//endpoint (ruta) a /productoRandom
app.get('/productoRandom', async (req, res) => {
    const p = await productos.getAll();
    const numeroRandom = Math.floor(Math.random() * p.length);
    res.send(p[numeroRandom]);
})