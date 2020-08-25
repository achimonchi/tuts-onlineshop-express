
const User = require("./../models/User.model");
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const {salt} = require("./../../helper/config");
const {required} = require("./../../helper/check");
const { response } = require("./../../helper/response");

exports.authSignUp = async(req,res)=>{
    try{
        const body = req.body;
        if(body.email && body.password && body.u_name && body.u_address){
            const user = await User.find({"u_auth.email" : body.email});
            if(user.length > 0){
                const data = {status:409, error:"Data duplicate !'"};
                response(res, data);
            } else {
                const user = new User({
                    _id : mongoose.Types.ObjectId(),
                    u_name : body.u_name,
                    u_address : body.u_address,
                    u_auth : {
                        email : body.email,
                        password : await bcrypt.hash(body.password, salt),
                    }
                })
    
                await user.save();            
                const data = {
                    status:201,
                    data:user
                };
                response(res, data)
            }
        } else {
            const dataRequired = {
                email:"", password:"", u_name:"", u_address:""
            };

            let invalid = required(req.body, dataRequired );
            res.status(400).json({status:400, error : invalid});
        }
    } catch(err){
        const data = {
            status: 500,
            error : err
        };

        response(res, data);
        
    }
}

exports.authSignIn = async(req,res)=>{

}