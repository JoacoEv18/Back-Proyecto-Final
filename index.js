const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 9000;
require('./database/conexion');
const path = require('path');

const app = express();
const colaboradorController = require('./controllers/colaboradorController');
const productosController = require('./controllers/productosControllers');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());
app.use(morgan('common'));

app.get('/', async (req, res) => {
    res.json({
        colaboradores: await colaboradorController.findAll(),
        productos: await productosController.findAll()
    });
})

app.post('/crear', async (req, res) => {
    const {nombre, apellido, dni, email, edad} = req.body;
    console.log(`${nombre} ${apellido}, ${dni}, ${email}, ${edad}`);
    await colaboradorController.create(req.body)
    res.send('Colaborador Agregado')
});

app.delete('/:id', (req, res) => {
    res.send('Colaborador Eliminado')
})

app.put('/:id', (req, res) => {
    res.send('Colaborador Actualizado')
})


app.listen(PORT, () => {
    console.log(`MERN trabajando en el Puerto ${PORT}`);
}); 