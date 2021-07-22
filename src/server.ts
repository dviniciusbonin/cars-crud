import database from './database'
import express from 'express';
import routes from './routes';
database();

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3000, () => { console.log('server is running') })