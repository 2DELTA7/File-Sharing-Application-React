import mongoose from 'mongoose';

const DBConnection = async () => {
    const MONGODB_URI = `mongodb://admin:admin@ac-jlkafwd-shard-00-00.dqeek7g.mongodb.net:27017,ac-jlkafwd-shard-00-01.dqeek7g.mongodb.net:27017,ac-jlkafwd-shard-00-02.dqeek7g.mongodb.net:27017/?ssl=true&replicaSet=atlas-h3waev-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log(`Database connected successfully.`)
    }
    catch(error)
    {
        console.error('Error while connecting with the database',error);
    }
}

export default DBConnection;