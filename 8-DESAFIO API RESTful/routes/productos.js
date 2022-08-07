const router = require('express').Router();
const Producto = require('../claseProducto.js');

router.get('/productos', (req, res) => {
    res.json(Producto.productos);
})

router.get('/productos/:id', (req, res) => {
    let producto = Producto.productos.find(producto => producto.id === Number(req.params.id));
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

router.post('/productos', (req, res) => {
    let { title, price, thumbnail } = req.body;
    const producto = { title, price, thumbnail };
    producto.id = Producto.productos.length + 1;
    Producto.productos.push(producto);
    productoGenerado = Producto.productos;
    res.json({ success: 'ok', new: productoGenerado});
});

router.put('/productos/:id', (req, res) => {
    let { title, price, thumbnail } = req.body;
    let index = Producto.productos.findIndex(producto => producto.id === Number(req.params.id));
    if (index >= 0) {
        Producto.productos[index] = { title, price, thumbnail };
        Producto.productos[index].id = Number(req.params.id);
        changedProduct = Producto.productos[index];
        res.json({ success: 'ok', new: changedProduct });
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

router.delete('/productos/:id', (req, res) => {
    let index = Producto.productos.findIndex(producto => producto.id === Number(req.params.id));
    if (index >= 0) {
        Producto.productos.splice(index, 1);
        res.json({ message: 'Producto eliminado' });
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

module.exports = router;