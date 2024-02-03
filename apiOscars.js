import  express  from "express"
const oscars = express();
import { getOscars, 
        postOscars, 
        putOscars, 
        deleteOscars
    } from "../controllers/oscarsController.js";

oscars.get('', getOscars );

oscars.post('', postOscars)

oscars.put( '/:id', putOscars )

oscars.delete('/:id', deleteOscars)

export { oscars }