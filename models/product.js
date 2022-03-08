// ใช้งาน mongoose
const mongoose=require('mongoose')


// เชื่อมไปยัง MongoDB
const dburl='mongodb://localhost:27017/productDB'
mongoose.connect(dburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

// ออกเเบบ Schema
const productSchema=mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})

//สร้าง Model
let Product=mongoose.model("products",productSchema)

//ส่งออก Model
module.exports=Product

//ออกเเบบ Function สำหรับบันทึกข้อมูล
module.exports.saveProduct=function(model,data){
   model.save(data);
}
