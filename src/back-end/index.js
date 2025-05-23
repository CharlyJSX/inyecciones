import app from './app.js';
import { PORT } from './config.js';
import { sequelize } from '../database/database.js';

import './models/Projects.js';
import './models/Task.js';



async function main() {
    
    try {
        
        // await sequelize.sync({force: false})
        // await sequelize.sync();
        await sequelize.authenticate();
        app.listen(PORT)
        console.log('Server on port', PORT);        
        console.log("Conexión establecida");
        
    } catch (error) {
        console.error('Conexión no establecida', error)
        
    }
    
  
}


main();
