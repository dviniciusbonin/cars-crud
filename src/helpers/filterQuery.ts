import Car from '../schemas/Car';
import { convertReal } from '../helpers/convertReal';

interface IFilter {
    brand?: string;
    model?: string;
    version?: string;
    year?: string;
    km?: string;
    gearshift?: string;
    sellingPrice?: string;
}

export async function filterQuery(attributes: IFilter) {
    console.clear();
    console.log(attributes);

    if (attributes.brand) {
        const car = await Car.find({
            brand: {
                $eq: attributes.brand
            }
        });

        return car;
    }
    if (attributes.model) {
        const car = await Car.find({
            model: {
                $eq: attributes.model
            }
        });

        return car;
    }
    if (attributes.version) {
        const car = await Car.find({
            version: {
                $eq: attributes.version
            }
        });

        return car;
    }
    if (attributes.year) {
        const car = await Car.find({
            year: {
                $eq: attributes.year
            }
        });

        return car;
    }
    if (attributes.gearshift) {
        const car = await Car.find({
            gearshift: {
                $eq: attributes.gearshift
            }
        });

        return car;
    }
    if (attributes.km) {
        const car = await Car.find({
            km: {
                $eq: attributes.km
            }
        });

        return car;
    }
    if (attributes.sellingPrice) {
        const car = await Car.find({
            sellingPrice: {
                $eq: attributes.sellingPrice
            }
        });

        return car;
    }

}
