// this code are endpoint from unsplash's api
import dotenvs from '../dotenv/index.env.js';

export default {
    secret_key: dotenvs.unsplash_api_key,
    url: 'https://api.unsplash.com'
}