import pgPromise from 'pg-promise';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const pgp = pgPromise();
const connectionString = process.env.DATABASE_URL

export const db_pool = pgp({
    
    connectionString,
   /* ssl: {
        rejectUnauthorized: false
    }*/
}); 

try {
    await db_pool.connect();
    console.log('Conexión a la base de datos establecida');
} catch (error) {
    console.error('Error al conectar a la base de datos:', error);
}
