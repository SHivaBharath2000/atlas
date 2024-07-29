import http from 'http';


//Creating a basic server
const server=http.createServer((req,res)=>{
    // res.end("<b> Hello i am  not server restart using http inbuilt NODEJs Package </b>");
    res.end(JSON.stringify({message:"hi"}))
})


const port=8000;

server.listen(port,()=>{
    console.log(Date().toString(),"Server listening on",port);
})