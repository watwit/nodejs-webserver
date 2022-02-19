// import http
const http=require('http')

// สร้าง Server ใช้งานผ่าน port 3000
http.createServer((req,res)=>{

    // Routing
    const pathName=req.url
    console.log(pathName)
    if(pathName==='/' || pathName==='/home'){
        res.end("Hello home page")
    }
    else if(pathName==='/product'){
        res.end("Hello product page")
    }
    else{
        res.writeHead(404) //HTTP Status code
        res.end("Not found")
    }

}).listen(3000,()=>{
   console.log("Start server in port 3000")
})

