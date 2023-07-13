const mongoose = require('mongoose');

// Function for handling connection to MongoDB database
const connectToMongoDB = async () => {
  const MONGO_URI = process.env.MONGO_URI
  const connection = mongoose.connection

  try {
    await mongoose.connect(MONGO_URI)
    console.log('Database connection successful!')
  } catch (error) {
    console.log('Error during the initial database connection: ', error)
  }

  // Handles any errors after connection has been established
  connection.on("Error", () => console.log("Connection to database failed."))

}
 
module.exports = connectToMongoDB;