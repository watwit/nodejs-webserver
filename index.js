// import http
const http=require('http')

// สร้าง Server ใช้งานผ่าน port 3000
http.createServer((req,res)=>{
    res.write("Hello M Node.Js")
    res.end()
}).listen(3000,()=>{
   console.log("Start server in port 3000")
})