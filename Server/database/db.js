import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.wdofc.mongodb.net:27017,cluster0-shard-00-01.wdofc.mongodb.net:27017,cluster0-shard-00-02.wdofc.mongodb.net:27017/FLIPKART_CLONE?ssl=true&replicaSet=atlas-wpld4u-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      //we are telling mongodb to connect to database with the new string
      useUnifiedTopology: true,
      //use the new server discovery and  monetering engine
      useFindAndModify: false,
      //it is present by default so we does not want it
    });
    console.log("Database Successfully Connected");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
