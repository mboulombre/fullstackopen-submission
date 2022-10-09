const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://lombre:lombre@cluster0.e9naj5i.mongodb.net/?retryWrites=true&w=majority`;

const databaseConnexion = mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true
});

module.exports = databaseConnexion;