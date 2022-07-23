class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(libroTitulo, libroAutor) {
        const libro = { titulo: libroTitulo, autor: libroAutor};
        this.libros.push(libro);
    }

    getBookNames() {
        const libroNombres = [];
        this.libros.forEach((libro) => libroNombres.push(libro.titulo));
        return libroNombres;
    }
}

const usuario = new Usuario("Cris", "Bolivar");

usuario.addBook('Trainspotting', 'Irvine Welsh');
usuario.addBook('1984', 'George Orwell');

usuario.addMascota('perro');
usuario.addMascota('gato');
usuario.addMascota('conejo');

console.log(usuario.getFullName());
console.log(usuario.getBookNames());
console.log(usuario.countMascotas());

