import {db} from '../db/conn.js'

const getOscars = async (req,res)=>{

    const sql = `select * from tbl_oscars order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postOscars = async (req, res)=>{


    const { pelicula , actor} = req.body;

    const params =  [pelicula, actor];

    const sql = `insert into tbl_oscars 
                (pelicula, actor )
                values 
                ($1, $2) returning * `

    const result = await db.query(sql , params);

    res.json(result);
    
}

const putOscars = async (req, res)=>{

    const { pelicula , actor} = req.body
    const {id} =req.params

    const params = [
        pelicula, 
        actor, 
        id
    ]

    const sql = `update tbl_oscars 
                  set
                   pelicula = $1, 
                   actor = $2
                where id = $3 returning *`

    const result = await db.query(sql, params)

    res.json(result);

}

const deleteOscars = async (req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_oscars where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}

export {getOscars, postOscars, putOscars, deleteOscars}