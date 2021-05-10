const express=require('express')
const app=express()
const http=require('http').createServer(app)
const Port =process.env.Port||3000
http.listen(Port,()=>{
    console.log(` Ok Dude, server is running at ${Port}`)
})
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
//socket
const io=require('socket.io')(http)
io.on('connection',(socket)=>{
    console.log("Let's Start Talk Together..")
    socket.on('message lele tau',(msg)=>{
        //console.log(msg)
        socket.broadcast.emit('message bhej',msg);
    })
})
