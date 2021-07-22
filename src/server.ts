import express from 'express';
import routes from './routes';

const server = express();

server.use(routes);

server.listen(3000, () => { console.log('server is running') })