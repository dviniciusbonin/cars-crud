import mongoose from "mongoose";
import { config } from 'dotenv';
config();
const uri = `${process.env.URI}`;

async function connect(): Promise<void> {
    try {

        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        await mongoose.connect(uri);

        console.log('database to conected')
    } catch (error) {
        console.log(typeof error);
    }

}

export default connect;

