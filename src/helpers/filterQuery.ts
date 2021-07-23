import Car from '../schemas/Car';
import { toNumber } from '../helpers/toNumber';
import { convertReal } from '../helpers/convertReal';

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

export async function filterQuery({ brand, model, version, year, km, gearshift, sellingPrice, maxPrice = 100000000000, maxYear = 2021 }: IFilter) {
    let car = 0;
    if (brand) {
        car = await Car.find({
            brand: {
                $eq: brand
            },

            year: {
                $lte: maxYear
            },

            sellingPrice: {
                $lte: maxPrice
            }

        });


    }
    if (model) {
        car = await Car.find({
            model: {
                $eq: model
            },
            year: {
                $lte: maxYear
            },

            sellingPrice: {
                $lte: maxPrice
            }
        });


    }
    if (version) {
        car = await Car.find({
            version: {
                $eq: version
            },
            year: {
                $lte: maxYear
            },

            sellingPrice: {
                $lte: maxPrice
            }
        });


    }
    if (year) {
        car = await Car.find({
            year: {
                $eq: year
            },

            sellingPrice: {
                $lte: maxPrice
            }
        });

    }
    if (gearshift) {
        car = await Car.find({
            gearshift: {
                $eq: gearshift
            },
            year: {
                $lte: maxYear
            },

            sellingPrice: {
                $lte: maxPrice
            }
        });

    }
    if (km) {
        car = await Car.find({
            km: {
                $eq: km
            },
            year: {
                $lte: maxYear
            },

            sellingPrice: {
                $lte: maxPrice
            }
        });

    }
    if (sellingPrice) {
        car = await Car.find({
            sellingPrice: {
                $eq: sellingPrice
            },

            year: {
                $lte: maxYear
            }
        });

    }


    if (car == 0) {
        car = await Car.find({
            sellingPrice: {
                $lte: maxPrice
            },

            year: {
                $lte: maxYear
            }
        });
    }



    return car;

}
