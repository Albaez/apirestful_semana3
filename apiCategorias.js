import express from "express";
const categorias = express();

import { deleteCategorias, getCategorias, postCategorias, putCategorias } from "../controllers/categoriaController";

categorias.get('', getCategorias);
categorias.post('', postCategorias);
categorias.put('/:id', putCategorias);
categorias.delete('/:id', deleteCategorias);

export { categorias };
