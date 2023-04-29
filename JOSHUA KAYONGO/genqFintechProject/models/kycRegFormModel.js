const mongoose = require("mongoose")
const kycRegFormSchema = new mongoose.Schema({
    firstName:{
       type: String,
       trim: true 
    },
    lastName:{
        type:String,
        trim:true
    },
    dob:{
        type:Number,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    district:{
        type:String,
        trim:true
    },
    town:{
        type:String,
        trim:true
    },
    zipCode:{
        type:String,
        trim:true
    },
    phone1:{
        type:Number,
        trim:true
    },
    phpne2:{
        type:Number,
        trim:true
    }
})
module.exports = mongoose.model("kycRegister", kycRegFormSchema)