import request from 'supertest';
import app from '../app.js';
import { key_token, user } from './auth.test.js';

describe('GET /users/all', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app)
            .get('/users/all')
            .send();
        expect(response.statusCode).toBe(200)
    });
    test("There are data ", async () => {});
    test('should contain data', async () => {
        const response = await request(app)
            .get('/users/all')
            .send();
        expect(response.body).not.toBe(undefined);
        console.log(key_token);
    });
});

describe('DELETE /users/delete', () => {
   test('password is not correct', async () => {
        const response = await request(app)
            .post('/users/delete')
            .set("Accept", 'application/json')
            .set('access-token', key_token)
            .send({password: '12345'})
        expect(response.body.message).toBe('Your password is not correct')
   }); 
   test('Account deleted successfully ', async () => {
        const response = await request(app)
            .post('/users/delete')
            .set("Accept", 'application/json')
            .set('access-token', key_token)
            .send({password: user.password})
        expect(response.body.deleted).toBe(true)
   }); 
});






