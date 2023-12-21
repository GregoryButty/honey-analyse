import mongoose from "mongoose";

const connMongoDB = async () => {
    await mongoose
            .connect(process.env.MONGODB_URI)
            .then(() => console.log("Conected to MongoDB"))
            .catch((error) => console.log(error))
}

export default connMongoDB;