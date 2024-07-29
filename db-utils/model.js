import mongoose from "mongoose";

const teacherSchema=new mongoose.Schema({
  id:{
    type:"string",
    required:true
  } ,
  name:{
    type:"string",
    required:true
  } ,
  course:{
    type:"string",
    required:true
  } ,
  batch:{
    type:"string",
    required:true,
  } ,
  students:{
    type:"array",
    required:true,
    default:[]
  }
})

//Model creation using schema
const teacherModel=new mongoose.model("teacher",teacherSchema,"teachers")
                                      //objectname,schema,collection name value
export default teacherModel;