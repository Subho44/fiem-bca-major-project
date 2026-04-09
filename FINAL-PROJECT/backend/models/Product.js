const mongoose = require('mongoose');

const productschema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        price:{type:Number,required:true},
        category:{type:String,required:true},
        image:{type:String,default:''},
        description:{type:String,required:true},
        stock:{type:Number,required:true},
    },
    {
        timestamps:true,
    }
);
module.exports = mongoose.model('Product-fiem',productschema);