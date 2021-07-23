import { Router } from 'express';
import CarController from './controllers/CarController'; './controllers/CarController';

const routes = Router();


routes.post('/cars', CarController.save);

routes.get('/car/:car_id', CarController.getCar);

routes.get('/cars', CarController.getCars);

routes.put('/cars/:car_id', CarController.update);

export default routes;