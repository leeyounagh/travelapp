const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ContentsSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    address: {
        type: String,
        maxlength: 50
    }, 
    
    images: {
        type: Array,
        default: []
    },
})


const Contents =mongoose.model('Contents',ContentsSchema)

module.exports ={Contents}