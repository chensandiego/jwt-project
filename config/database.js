const mongoose = require("mongoose");

const { MONGO_URI } = process.env.MONGODB_URL;

exports.connect = async () => {
  try{
  // Connecting to the database
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Successfully connected to database");
  }catch (err){

    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  }
  
};
