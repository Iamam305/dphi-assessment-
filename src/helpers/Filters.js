import { db } from "./DB";





export const getFilterRes = (Status, Level) =>{

    return db.filter(e => {
         return Status.includes(e.status()) && Level.includes(e.Lvl)  
    })


}
