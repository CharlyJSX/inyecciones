import app from './app.js';
// import { PORT } from '../config.js';
import { sequelize } from './database/database.js';


import './back-end/models/Inyeccion.js';



async function main() {
    
    try {
        
        await sequelize.sync({force: false})
        await sequelize.sync();
        await sequelize.authenticate();
        app.listen(3000, () => {
            console.log('Server running');
            // console.log(`Server running at http://localhost:${PORT}`);

    })
        console.log('Server on port');        
        console.log("Conexión establecida");
        
    } catch (error) {
        console.error('Conexión no establecida', error)
        
    }
    
  
}


main();
