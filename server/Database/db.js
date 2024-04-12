import mongoose from 'mongoose';
const DBConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true});
        console.log(`Database connected successfully.`)
    }
    catch(error)
    {
        console.error('Error while connecting with the database',error);
    }
}

export default DBConnection;