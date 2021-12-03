//import mongoose from 'mongoose';
const  mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  Book_Name:  String,
  Name_of_Issuer: String,
  Due_Date: String
});

module.exports = mongoose.model("myschema",schema,"SL-LAB-12")