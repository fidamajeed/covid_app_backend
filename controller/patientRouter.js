const express=require("express")
const patientModel=require("../model/patientModel")
const router=express.Router()
router.post("/add",async(req,res)=>{
    let data=req.body
    let cov=new patientModel(data)
    let rslt=await cov.save()
    res.json(
    {
        status:"success"
    })
})
router.get("/view",async(req,res)=>{
    let data=await patientModel.find()
    res.json(data)
    res.send("view")
})



module.exports=router