const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectdb = require("./config/db");
const productroute = require("./routes/productRoutes");
dotenv.config();
const app = express();

connectdb();
app.use(cors());
app.use(express.json());
app.use('/api/products',productroute)
app.get("/",(req,res)=>{
    res.send("backend api is working");
});
const port = process.env.PORT || 5600;
app.listen(port,()=>{
    console.log("server is running port 5600");
});
