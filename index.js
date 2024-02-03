
import express from 'express';
import { categorias } from './routes/apiCategorias.js';
import { oscars } from './routes/apiOscars.js';
const app = express();



app.use(express.json());

const port = 4000;

app.use('/api/oscars', oscars);
app.use('/api/categorias', categorias);

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});