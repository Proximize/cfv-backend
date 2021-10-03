const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

//model (schemaname,actualschema)
module.exports = mongoose.model('Author', authorSchema)