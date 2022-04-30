import request from 'supertest';
import app from '../app.js';
export let token = '';
const key_email = '';


export let user = {
    full_name: 'Test Example',
    nick_name: 'test_fer59',
    email: 'test.example@gmail.com',
    password: "test12345"
}

describe('POST /auth/signup', () => {
    test('Missing passwords', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .set('Accept', 'application/json')
            .send({
                full_name: user.full_name,
                nick_name: user.nick_name,
                email: user.email,
                password: ''
            });
        expect(response.body.userCreated).toBe(false);
        expect(response.body.message).toEqual('Missing password, your password should be greater than 5 characteres and less than 25')
    });
    test('Missing email', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .set('Accept', 'application/json')
            .send({
                full_name: user.full_name,
                nick_name: user.nick_name,
                email: '',
                password: user.password
            });
        expect(response.body.userCreated).toBe(false);
        expect(response.body.message).toEqual('Missing email, please add a valid email')
    });
    test('Missing full name', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .set('Accept', 'application/json')
            .send({
                full_name: '',
                nick_name: user.nick_name,
                email: user.email,
                password: user.password
            });
        expect(response.body.userCreated).toBe(false);
        expect(response.body.message).toBe('Missing your name, your name must be greater than 5 characterers and less than 35')
    });
    test('Missing nick name', async () => {
        user.nick_name = '';
        const response = await request(app)
            .post('/auth/signup')
            .set('Accept', 'application/json')
            .send({
                full_name: user.full_name,
                nick_name: '',
                email: user.email,
                password: user.password
            });
        expect(response.body.userCreated).toBe(false);
        expect(response.body.message).toBe('your nick name must be greater than 5 characterers and less than 25')
    });
    test('Sign Up Successfully', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .set('Accept', 'application/json')
            .send({
                full_name: 'Test Example',
                nick_name: 'test_fer59',
                email: 'test.example@gmail.com',
                password: "test12345"
            });
        expect(response.body.userCreated).toBe(true);
        expect(response.body.message).toBe('Your user was created successfully')
    });
    // test('verify email', async () => {});
});