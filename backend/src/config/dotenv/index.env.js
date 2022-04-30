import dotenv from 'dotenv';
dotenv.config();

export default {
    db_name: process.env.DB_NAME,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD
}