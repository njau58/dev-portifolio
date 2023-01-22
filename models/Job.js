import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please provide your first name"],
  },
  second_name: {
    type: String,
    required: [true, "Please provide your second name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
  job_title: {
    type: String,
    required: [true, "Please provide your first name"],
  },
  about_us: {
    type: String,
    required: [true, "Please provide your first name"],
  },
  cv:{
    type:String,
    required: [true, "Please upload your cv"],
    
},

phone_number: {
    type: String,
    required: [true, "Please provide your phone number"],
  },

},{timestamps:true}
);


mongoose.models={}


export default mongoose.models.Job || mongoose.model('job', JobSchema)