const cors = require('cors');
const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose')

dotenv.config();

const app = express();


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
})



  mongoose.connect(process.env.MONGODB_URI, {
   
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});