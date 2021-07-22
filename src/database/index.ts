import mongoose from "mongoose";

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost/crud",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )

        console.log('database to conected')
    } catch (error) {
        console.log(error);
    }

}

export default connect;

