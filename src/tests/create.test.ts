import database from '../database'
import express from 'express';
import routes from '../routes';
const request = require("supertest")
database();

const server = express();

server.use(express.json());
server.use(routes);

test('create a car', async () => {
    const res = await request(server)
        .post('/cars')
        .send(
            {
                brand: "volkswagen",
                model: "gol",
                version: "surf",
                year: 2019,
                km: 180000,
                gearshift: "automatico",
                sellingPrice: "10.000,00"
            }
        )

    expect(res.body).toHaveProperty("_id")
    expect(res.statusCode).toEqual(201)
})