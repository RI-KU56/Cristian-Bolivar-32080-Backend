const express = require('express')
const routerProductos = require('./routers/routerProductos')
const routerCarrito = require('./routers/routerCarrito')

const app = express()
let acceso = true
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

if (acceso === true){
    app.use('/api/productos', routerProductos)
    app.use('/api/carrito', routerCarrito)
}else {
    console.log("No teine acceso!")
}

const server = app.listen(PORT , () => console.log(`servidor corriendo en http://localhost:${PORT}`))
server.on('error', (error) => console.log(`Error en servidor ${error}`))