const mongoose = require("mongoose"); // used to connect node app with running mongo db


// mongoose
//   .connect("mongodb://127.0.0.1:27017/Project-01")
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log("Mongo Error: ", err));
 

async function connectMongoDb(url){
    return mongoose.connect(url);
    // returns a promise
};

module.exports = {
    connectMongoDb,
};
