import { Request, Response } from 'express';
import Car from '../schemas/Car';

class CarContoller {

    async save(request: Request, response: Response) {
        const { brand, model, version, year, km, gearshift, sellingPrice } = request.body;

        const car = await Car.create({
            brand, model, version, year, km, gearshift, sellingPrice: Number(sellingPrice.replace(".", "").replace(".", "").replace(",", ""))
        });

        return response.json(car);
    }

    async getAll(request: Request, response: Response) {
        const cars = await Car.find();

        return response.json(cars);
    }
}

export default new CarContoller();