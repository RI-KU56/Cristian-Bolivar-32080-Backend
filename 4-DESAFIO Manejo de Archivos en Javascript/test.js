console.clear()
const Contenedor = require('./Contenedor.js');

const productos = new Contenedor('productos.txt');

const test = async () => {
	const data = await productos.save({ name: "name", lastName: "last name" });
	console.log(productos.objects);
}

test();