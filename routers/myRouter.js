// import express
const express=require('express')

// import express router
const router=express.Router()

// import module path
const path=require('path')

// // จัดการ Routing + Parameter
// router.get("/",(req,res)=>{
//     res.status(200) //เเจ้ง Status code
//     res.type('text/html') //กำหนดรูปเเบบเนื้อหา
//     res.sendFile(path.join(__dirname,'../templates/index.html'))
// })
// router.get("/product/:id",(req,res)=>{ // product/1
//     const productID=req.params.id
//     if(productID==="1"){
//         res.sendFile(path.join(__dirname,'../templates/product1.html'))
//     }
//     else if(productID==="2"){
//         res.sendFile(path.join(__dirname,'../templates/product2.html'))
//     }
//     else if(productID==="3"){
//         res.sendFile(path.join(__dirname,'../templates/product3.html'))
//     }
//     else{
//         res.redirect('/')
//     }

// })

// exports ให้ไฟล์อื่นใช้งาน
module.exports = router