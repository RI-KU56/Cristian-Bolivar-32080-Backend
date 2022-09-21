const mongoose = require('mongoose')
const esquemaProd = require('./modelsMDB/schemaProducto')

class Producto {
    async connectMDB() {
        try {
            const URL = "mongodb+srv://supercris56:Super56@cluster0.brgzxxr.mongodb.net/?retryWrites=true&w=majority";
            let rta = await mongoose.connect(URL, {
                useNewUrlParser: true,
                useUniFiedTopology: true
            })
        } catch (e) {
            console.log(e)
        }   
    }

    async save(producto) {
        try {
            let tiempo = new Date()
            await this.connectMDB()
            producto.time = tiempo.toString()
            await esquemaProd.create(producto)
            const id = producto.idProd
            mongoose.disconnect()
            return id
        } catch (error) {
            throw Error(error.message)
        }
    }

    async getAll() {
        try {
            await this.connectMDB()
            const prod = await esquemaProd.find({})
            mongoose.disconnect()
            return prod
        } catch (error) {
            throw Error(error.message)
        }
    }

    async getById(id) {
        try {
            await this.connectMDB()
            const prodId = await esquemaProd.findById(id)
            mongoose.disconnect()
            return prodId
        } catch (error) {
            throw Error(error.message)
        }
    }

    async changeById(id, cambio) {
        try {
            await this.connectMDB()
            const nuevo = await esquemaProd.updateOne({idProd: id}, {$set: cambio})
            mongoose.disconnect()
            return nuevo
        } catch (error) {
            throw Error(error.message)
        }
    }

    async deleteById(id) {
        try {
            await this.connectMDB()
            const borrado = await esquemaProd.deleteOne({idProd: id})
            mongoose.disconnect()
            return borrado
        } catch (error) {
            throw Error(error.message)
        }
    }
}

module.exports = Producto