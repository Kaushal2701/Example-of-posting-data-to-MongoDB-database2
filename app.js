const express = require("express");
const app = express();
const url = "mongodb+srv://test:TDNRIYUlMxEEjKvb@cluster0.yaxj8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const myschema = require('./schema');

mongoose.connect(url).then(()=>console.log("Connected to db"))

app.use(express.json())

app.post("/new-post",async(req,res)=>{
    const mybook = req.body.Book_Name;
    const myissuer = req.body.Name_of_Issuer;
    const mydue = req.body.Due_Date;

    try{
        const newTodo = new myschema(
            {
                Book_Name : mybook,
                Name_of_Issuer : myissuer,
                Due_Date : mydue
            }
        )
        const savedTodo = await newTodo.save()
        res.json(
            {"message":"Todo is saved","data":savedTodo}
        )
    }catch(err){
        res.json(err);
    }
})

app.use("/",(req,res)=>{
    res.send("kaushal")
    res.json(
        {"message":"Express started"}
    )
})

app.listen(3001, ()=>console.log("Express started"))