const bcrypt = require("bcrypt");

exports.db = {
    MONGODB_HOST : process.env.MONGODB_HOST || "localhost:27017",
    MONGODB_DBNAME : process.env.MONGODB_DBNAME || "yt-online-shop",
}

exports.salt = bcrypt.genSaltSync(process.env.SALT || 2);