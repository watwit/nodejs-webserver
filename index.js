// import http
const http=require('http')

// import file
const fs=require('fs')
const indexPage=fs.readFileSync(`${__dirname}/templates/index.html`) //__dirname==nodejswebserver
const productPage=fs.readFileSync(`${__dirname}/templates/product1.html`)

// สร้าง Server ใช้งานผ่าน port 3000
http.createServer((req,res)=>{
    
    // Routing 
    const pathName=req.url
    console.log(pathName)
    if(pathName==='/' || pathName==='/home'){
        res.end(indexPage)
    }
    else if(pathName==='/product'){
        res.end(productPage)
    }
    else{
        res.writeHead(404) //HTTP Status code
        res.end("Not found")
    }

}).listen(3000,()=>{
   console.log("Start server in port 3000")
})

