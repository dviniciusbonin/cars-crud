import database from '../database'
import express from 'express';
import routes from '../routes';
const request = require("supertest")
database();

const server = express();

server.use(express.json());
server.use(routes);

test('list cars', async () => {
    const res = await request(server)
        .get('/cars')
    expect(res.statusCode).toEqual(200);
})