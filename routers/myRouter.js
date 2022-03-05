
//================= Views =======================
// import express
const express=require('express')

// import express router
const router=express.Router()

// import mongodb models
const Product=require('../models/product')

router.get('/',(req,res)=>{
    const products=[ 
        {name:"เสื้อ",price:50,image:'images/products/product1.png'},               
        {name:"กางเกง",price:40,image:'images/products/product2.png'}
    ]
    res.render('index.ejs',{products:products})
})

router.get('/addForm',(req,res)=>{
    res.render('form')
})

router.get('/manage',(req,res)=>{
    res.render('manage')
})

// router.get('/insert',(req,res)=>{
//     console.log(req.query)
//     console.log(req.query.name)
// })

router.post('/insert',(req,res)=>{
    
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.body.image,
        description:req.body.description
    })

    Product.saveProduct(data,(err)=>{
        if(err) console.log(err)
        res.redirect('/')
    })

})



//========================================
// // import express
// const express=require('express')

// // import express router
// const router=express.Router()

// // import module path
// const path=require('path')
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