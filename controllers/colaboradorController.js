const Colaborador = require('../models/colaboradorModel');

class colaboradorController {

    async findAll(){
        try {
            return await Colaborador.find().lean();
        } catch (error) {
            throw error
        }
    }
    async create(colaborador){
        try {
            return await Colaborador.create(colaborador);
        } catch (error) {
            throw error
        }
    }

    async delete(id){
        try {
            return await Colaborador.findByIdAndDelete(id);
        } catch (error) {
            throw error
        }
    }

    async update(id){
        try {
            return await Colaborador.findByIdAndUpdate(id);
        } catch (error) {
            throw error
        }
    }
}

module.exports = new colaboradorController;