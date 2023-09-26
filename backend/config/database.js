const mongoose = require('mongoose');
const MONGO_URI ='mongodb+srv://hrithik:io9nn9UObqOcARiI@cluster0.fe4kclq.mongodb.net/ecomm';

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;
