require('dotenv').config();
//const mongoose=require('mongoose')
const express=require('express');
const app=express();
const DbConnect=require('./database')
const router=require('./routes')
const cors=require('cors');
const cookieParser=require('cookie-parser');

app.use(cookieParser());
const corsOption={
    origin:['http://localhost:3000'],
    credentials:true,
    
};

app.use(cors(corsOption));
app.use('/storage',express.static('storage'));



//app.use(cors(corsOption))

const PORT=process.env.PORT || 5500;
DbConnect();
app.use(express.json({limit:'8mb'}))
app.use(router);


app.get('/',(req,res)=>{
    res.send("Hiii from express home page")
})

app.listen(PORT,()=>{
    console.log('server started....!')
})