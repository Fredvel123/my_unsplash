import {Sequelize} from 'sequelize';
import dotenv from '../dotenv/index.env.js';


const sequelize = new Sequelize({
    host: 'localhost',
    // database: 'tasks_db',
    // username: 'postgres',
    // password: 'freddy',
    database: dotenv.db_name,
    username: dotenv.db_username,
    password: dotenv.db_password,
    dialect: 'postgres',
    logging: false
})

const test_db = async () => {
    try {
        await sequelize.authenticate();
        console.log('The database is connected successfully');        
    } catch (err) {
        // console.log(err);
        console.log('database error');
    }
}
test_db();

export default sequelize;