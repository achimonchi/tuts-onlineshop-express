const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    u_name : {
        type : String,
        required : true
    },
    u_address : {
        type : String,
        required : true
    },
    u_auth : {
        email : {
            type : String,
            required : true,
            unique : true,
            match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        }, 
        password :{
            type : String,
            required : true
        },
        isActive : {
            type : Number,
            default : 1
        }
    }
})

module.exports = mongoose.model("Users", userShema);