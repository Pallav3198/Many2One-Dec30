const express = require('express');
const postsModel = require('./models').posts;
const userDetailsModel = require('./models').userDetails;
const app = express();
app.use(express.json());
const PORT = 4000;
//
app.get('/',(req,res)=>{
    res.status(200).json({
        status:1,
        message:'Welcome to the Home page!'
    })
})
//
app.get("/posts",(req,res)=>{
    postsModel.findAll({
        include:{
            model:userDetailsModel
        }
    }).then((data)=>{
        res.status(200).json({
            status:1,
            message:data
        })
    }).catch((err)=>{
        res.status(500).json({
            status:0,
            message: err
        })
})
})
//
app.get("/users",(req,res)=>{
    postsModel.findAll({
        include:{
            model:postsModel
        }
    }).then((data)=>{
        res.status(200).json({
            status:1,
            message:data
        })
    }).catch((err)=>{
        res.status(500).json({
            status:0,
            message: err
        })
    })
})

app.listen(PORT,()=>{
    console.log('LISTENING ON'+PORT);
})