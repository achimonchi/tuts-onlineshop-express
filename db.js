const mongoose = require('mongoose');

const {db} = require('./helper/config');

const connect = async() =>{
    try{
        const URI = `mongodb://${db.MONGODB_HOST}/${db.MONGODB_DBNAME}`
        await mongoose.connect(URI, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log("DB Connected");
    } catch(err){
        console.error(err);
        throw err;
    }
}

connect();