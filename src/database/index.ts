import mongoose from "mongoose";

async function connect(): Promise<void> {
    try {

        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        await mongoose.connect("mongodb://localhost/crud");

        console.log('database to conected')
    } catch (error) {
        console.log(typeof error);
    }

}

export default connect;

