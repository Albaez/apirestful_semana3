import { db } from '../db/conn.js';

const getOscars = async (req,res)=>{

    const sql = `select * from tbl_categoria order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postCategorias = async (req, res)=>{


    const { nombre} = req.body;

    const params =  [nombre];

    const sql = `insert into tbl_categorias 
                (nomnbre )
                values 
                ($1) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putCategorias = async (req, res)=>{

    const { nombre} = req.body
    const {id} =req.params

    const params = [
        nombre, 
        id
    ]

    const sql = `update tbl_categorias 
                  set nombre = $1, 
                where id = $2 returning *`;

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteCategorias = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from tbl_categorias
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export { deleteCategorias, getCategorias, postCategorias, putCategorias };
