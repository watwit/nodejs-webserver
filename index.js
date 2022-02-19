// ================ Node js + Express ====================

// import express
const express=require('express')

// เรียกใช้งาน express ผ่านตัวแปร app
const app =express()
app.use((req,res)=>{ // path เริ่มต้น
    res.send("Hello express.js")
})

//Routing
app.get("/home",(req,res)=>{
    res.send("Hello Home")
})
app.get("/product",(req,res)=>{
    res.send("Hello product")
})

app.listen(8080,()=>{ // run server
console.log("Start server on port 8080")
})



// ================ Node js only ====================

// // import http
// const http=require('http')

// // import file
// const fs=require('fs')
// const indexPage=fs.readFileSync(`${__dirname}/templates/index.html`) //__dirname==nodejswebserver
// const productPage1=fs.readFileSync(`${__dirname}/templates/product1.html`)
// const productPage2=fs.readFileSync(`${__dirname}/templates/product2.html`)
// const productPage3=fs.readFileSync(`${__dirname}/templates/product3.html`)

// //import url
// const url=require('url')

// // สร้าง Server ใช้งานผ่าน port 3000
// http.createServer((req,res)=>{
//     // url
//     const {pathname,query}=url.parse(req.url,true)

//     // Routing 
//     // const pathName=req.url
//     // console.log(pathName)

//     if(pathname==='/' || pathname==='/home'){
//         res.end(indexPage)
//     }
//     else if(pathname==='/product'){
//         //ข้อมูลสินค้าชิ้นที่ X
//         if(query.id==="1"){
//             res.end(productPage1)
//         }
//         else if(query.id==="2"){
//             res.end(productPage2)
//         }  
//         else if(query.id==="3"){
//             res.end(productPage3)
//         }   
//         else{
//             res.writeHead(404) //HTTP Status code
//             res.end("Not found")
//         }     
//     }
//     else{
//         res.writeHead(404) //HTTP Status code
//         res.end("Not found")
//     }

// }).listen(3000,()=>{
//    console.log("Start server in port 3000")
// })

