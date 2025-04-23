import mongoose from "mongoose";


async function connectToDatabase(){
    
    mongoose.connect("mongodb+srv://davicoenerosa1:Jenio12345@cluster0.23scyyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}

export default connectToDatabase();

 