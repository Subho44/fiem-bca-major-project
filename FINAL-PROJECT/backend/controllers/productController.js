const Product = require('../models/Product');

//create
exports.createproduct = async(req,res)=>{
    const {name,price,category,image,description,stock}= req.body;
    const newproduct = new Product({name,price,category,image,description,stock});
    const save = await newproduct.save();
    res.status(201).json(save);
}
//all view
exports.viewproduct = async(req,res)=>{
    const products = await Product.find();
    res.status(201).json(products);
}
//singel view
exports.oneproduct = async(req,res)=>{
    const product = await Product.findById(req.params.id);
    res.status(201).json(product);
}
//update 

exports.updateproduct = async(req,res)=>{
    const {name,price,category,image,description,stock}= req.body;
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {name,price,category,image,description,stock},
        {new:true}
    );
    res.status(201).json(product);
}
//delete
exports.deleteproduct = async(req,res)=>{
    
    await Product.findByIdAndDelete(
        req.params.id,
    );
    res.status(201).json({message:"product delete sucessfully"});
}