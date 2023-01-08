const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const colaboradorSchema = new Schema({
    nombre: {
        type: 'string',
        required: true
    },
    apellido: {
        type: 'string',
        required: true
    },
    dni: {
        type: 'string',
        required: true
    },
    email: {
        type:'string',
        required: true
    },
    edad: {
        type:'number',
        required: true
    },
    timestamp: {
        type: 'Date',
        default: new Date()
    }
});

const Colaborador = mongoose.model('colaborador', colaboradorSchema)

module.exports = Colaborador;