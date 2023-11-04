const express = require('express');

const mongoose = require('mongoose');
const cors=require("cors")
const routes=require('./routes/TodoRoutes')

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; 
app.use(express.json())
app.use(cors())



mongoose.connect(process.env.MONGOOB_URL)
.then(()=> console.log("Connected  to MongoDB..."))
.catch((err)=> console.log(err))
app.use(routes)
app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 
