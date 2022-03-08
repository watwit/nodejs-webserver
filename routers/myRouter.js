
//================= Views =======================
// import express
const express=require('express')

// import express router
const router=express.Router()

// import mongodb models
const Product=require('../models/product')

// import multer
const multer=require('multer')

router.get('/',(req,res)=>{
    Product.find().exec((err,doc)=>{
        res.render('index.ejs',{products:doc})
    }) 
})

router.get('/addForm',(req,res)=>{
    // if(req.cookies.login){
    //     res.render('form')
    // }else{
    //     res.render('admin') 
    // }

    if(req.session.login){
        res.render('form')
    }else{
        res.render('admin') 
    }
})

router.get('/manage',(req,res)=>{
    // if(req.cookies.login){
    //     Product.find().exec((err,doc)=>{
    //         res.render('manage',{products:doc})
    //     })
    // }else{
    //     res.render('admin')
    // }

    if(req.session.login){
        Product.find().exec((err,doc)=>{
            res.render('manage',{products:doc})
        })
    }else{
        res.render('admin')
    }

})
router.get('/logout',(req,res)=>{
    // res.clearCookie('username')
    // res.clearCookie('password')
    // res.clearCookie('login')
    // res.redirect('/manage')
    req.session.destroy((err)=>{
        res.redirect('/manage')
    })
    
})
// router.get('/insert',(req,res)=>{
//     console.log(req.query)
//     console.log(req.query.name)
// })


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images/products')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg")
    }
})
//เริ่มต้น Upload
const upload=multer({
    storage:storage
})

router.post('/insert',upload.single("image"),(req,res)=>{
    
    let data = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        description:req.body.description
    })

    Product.saveProduct(data,(err)=>{
        if(err) console.log(err)
        res.redirect('/')
    })

})

router.get('/delete/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id ,{usefindAndModify:false}).exec(err=>{
        if(err) console.log(err)
        res.redirect('/manage')
    })
})

router.get('/:id',(req,res)=>{
    const product_id=req.params.id;
    Product.findOne({_id:product_id}).exec((err,doc)=>{
        res.render('product',{products:doc})
    })
})

router.post('/edit',(req,res)=>{
    const edit_id=req.body.edit_id

    Product.findOne({_id:edit_id}).exec((err,doc)=>{
        res.render('edit',{products:doc})
    })

})

router.post('/update',(req,res)=>{
    let id = req.body.update_id
    let data = {
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    }

    Product.findByIdAndUpdate(id,data,{usefindAndModify:false}).exec(err=>{
        if(err) console.log(err)
        res.redirect('/manage')
    })

})


router.post('/login',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const timeExpire=10000 // 10วิ
    
    if(username=='admin' && password=='123'){
        // //สร้าง Cookie
        // res.cookie('username',username,{maxAge:timeExpire})
        // res.cookie('password',password,{maxAge:timeExpire})
        // res.cookie('login',true,{maxAge:timeExpire})
        // res.redirect('/manage')

        // สร้าง session
        req.session.username=username
        req.session.password=password
        req.session.login=true
        req.session.cookie.maxAge=timeExpire
        res.redirect('/manage')
    }else{
        res.render('404')
    }

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