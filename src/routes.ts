import { Router } from 'express';
import CarController from './controllers/CarController'; './controllers/CarController';

const routes = Router();


routes.post('/cars', CarController.save);
routes.get('/cars', CarController.getAll);

export default routes;