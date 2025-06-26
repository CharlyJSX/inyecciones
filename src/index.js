import app from './app.js';
import { PORT } from '../config.js';
import { sequelize } from './database/database.js';


import './back-end/models/Inyeccion.js';



async function main() {
    
    try {
        
        await sequelize.sync({force: false})
        await sequelize.sync();
        await sequelize.authenticate();
        app.listen(PORT, () => {
            console.log('http://localhost:',PORT)
            console.log(`Server running at http://localhost:${PORT}`);

    })
        console.log('Server on port', PORT);        
        console.log("Conexión establecida");
        
    } catch (error) {
        console.error('Conexión no establecida', error)
        
    }
    
  
}


main();
