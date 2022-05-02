import dotenv from 'dotenv';
dotenv.config();

export default {
    unsplash_api_key: process.env.UNSPLASH_API_KEY,
    db_name: process.env.DB_NAME,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    secret_key_jwt: process.env.KEY_JWT
}