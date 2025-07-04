import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { sequelize } from './database/database.js';

import './back-end/models/Inyeccion.js';

async function main() {
    try {
        await sequelize.sync({force: false})
        await sequelize.sync();
        await sequelize.authenticate();
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log('Server running');
            console.log(`Server running at http://localhost:${PORT}`);
        })
        console.log('Server on port');        
        console.log("Conexión establecida");
    } catch (error) {
        console.error('Error al iniciar la app:', error);
    }
}

main();
