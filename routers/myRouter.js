// import express
const express=require('express')

// import express router
const router=express.Router()

// import module path
const path=require('path')

// จัดการ Routing
router.get("/",(req,res)=>{
    res.status(200) //เเจ้ง Status code
    res.type('text/html') //กำหนดรูปเเบบเนื้อหา
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})
router.get("/product1",(req,res)=>{
    res.status(200) //เเจ้ง Status code
    res.type('text/html') //กำหนดรูปเเบบเนื้อหา
    res.sendFile(path.join(__dirname,'../templates/product1.html'))
})

// exports ให้ไฟล์อื่นใช้งาน
module.exports = router