const mongoose = require('mongoose');
require('dotenv').config()
// Replace 'your-database-uri' with your MongoDB connection URI

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
    }); 
    console.log('Connected to MongoDB via Mongoose');
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = connectToMongoDB;