const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRouter=require("./controller/patientRouter")

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://fidamajeed:fida3015@cluster0.4jvsmni.mongodb.net/covidDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)
app.use("/api/cov",patientRouter)

app.listen(3007,()=>{
console.log("server running")
})