import request from 'supertest';
import app from '../app.js';


describe('GET /users/all', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app)
            .get('/users/all')
            .send();
        expect(response.statusCode).toBe(200)
    });
    // test('token - should containing a access token', async () => {
    //     const response = await request(app)
    //         .get('/users/all')
    //         .send();
    //     expect(response.header)
    // });
    // test("No Token - shouldn't containing a access token", async () => {});
    test('should contain data', async () => {
        const response = await request(app)
            .get('/users/all')
            .send();
        expect(response.body).not.toBe(undefined);
    });
    // test('should ', async () => {});
});