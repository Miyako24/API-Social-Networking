const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb://127.0.0.1:27017/socialmedia');

mongoose.connection.on('connected', () => {
  console.log('🔌 Connected to MongoDB (socialmedia)');
});

mongoose.connection.on('error', (err) => {
  console.error(`❌ MongoDB connection error: ${err}`);
});


module.exports = mongoose.connection;

