const mongoose = require('mongoose')

const usersign = new mongoose.Schema({
    name : String,
    email : {type : String, unique : true, require:true},
    password : String
})

module.exports = mongoose.model('fashion_user',usersign)