const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file
const MONGO_URL = 'mongodb://hamza:ImranKhan@ac-c88qgnh-shard-00-00.mqvgcme.mongodb.net:27017,ac-c88qgnh-shard-00-01.mqvgcme.mongodb.net:27017,ac-c88qgnh-shard-00-02.mqvgcme.mongodb.net:27017/?ssl=true&replicaSet=atlas-hpaln0-shard-0&authSource=admin&retryWrites=true&w=majority&appName=mongodb';

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected!');
});
db.on('disconnected', () => {
    console.log('mongo db disconnected!');
});

db.on('error', (error) => {
    console.error('MongoDB connection error: ' ,error);
});

module.exports = db;