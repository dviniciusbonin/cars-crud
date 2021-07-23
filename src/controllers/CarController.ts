import { Request, Response } from 'express';

import Car from '../schemas/Car';

import { filterQuery } from '../helpers/filterQuery';
import { toNumber } from '../helpers/toNumber';
interface IUpdate {
    brand?: string;
    model?: string;
    version?: string;
    year?: number;
    km?: string;
    gearshift?: string;
    sellingPrice?: number;
}
interface IFilter {
    brand?: string;
    model?: string;
    version?: string;
    year?: number;
    km?: number;
    gearshift?: string;
    sellingPrice?: number;
    maxPrice?: number;
    maxYear?: number;
}
class CarContoller {

    async save(request: Request, response: Response) {
        const { brand, model, version, year, km, gearshift, sellingPrice } = request.body;

        const car = await Car.create({
            brand, model, version, year, km, gearshift, sellingPrice: toNumber(sellingPrice)
        });

        return response.status(201).json(car);
    }

    async getCar(request: Request, response: Response) {
        const { car_id } = request.params;

        const car = await Car.findById(car_id);

        if (!car) {
            return response.json({});
        }

        return response.json(car);
    }

    async update(request: Request, response: Response) {
        const { car_id } = request.params;
        const update: IUpdate = request.body;

        await Car.findByIdAndUpdate(car_id, update);

        const car = await Car.findById(car_id);

        return response.json(car);
    }

    async getCars(request: Request, response: Response) {
        const data: IFilter = request.query;

        const cars = await filterQuery(data);

        return response.json(cars);
    }
}

export default new CarContoller();