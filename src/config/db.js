const mongoose = require("mongoose");


async function connectToDB() {
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database  is connected to server ")
    })
    .catch(err =>{
        console.log("Error connecting to database")
        process.exit(1);
    })
}


module.exports = connectToDB;