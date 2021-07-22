import mongoose, { Schema } from 'mongoose';

const carSchema = new Schema({

    brand: String,

    model: String,

    version: String,

    year: Number,

    km: Number,

    gearshift: String,

    sellingPrice: Number
});

export default mongoose.model("cars", carSchema);