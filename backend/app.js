const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./frame/fsign')
const dbconnect = require('./db')
const dotenv = require('dotenv')

dotenv.config();
app.use(cors())
app.use(express.json())

app.post('/signup', async (req,res)=>{
    const {name,email,password} = req.body;
    console.log(name,email,password);
    const data = await db.findOne({email})
    if (data.email == email) {
        res.json({method : true})
    }
    await db.insertOne({'name' : name,'email': email,'password':password})
    res.json({method:false})
})

app.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    console.log(email,password);
    const data = await db.findOne({email:email,password:password})
    if (!data) {
        res.json({method:false})
    }
    res.json({method:true})
})

app.use('/',(req,res)=>{
    res.send('<h1>This is Backend</h1>')
})

app.listen(3000,()=>{
    dbconnect();
})