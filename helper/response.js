exports.response = (res, data)=>{
    res.status(data.status).json(data);
} 