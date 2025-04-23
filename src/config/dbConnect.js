import mongoose from "mongoose";

async function connectToDatabase(){
    mongoose.connect("mongodb+srv://davicoenerosa:@cluster0.x0oivbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}

export default connectToDatabase();

