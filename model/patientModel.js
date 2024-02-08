const mongoose=require("mongoose")
const patientschema=new mongoose.Schema(

    {
        name:String,
        phone:String,
        address:String,
        symptoms:String,
        status:String
    }
)
module.exports=mongoose.model("patient_entry",patientschema)