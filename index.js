// const app = require('./app')
// console.log(app.x)
// var a= 10;
// var b= 20;
// var c = 40;
// if(a===10){
//     console.log('mached')
// }

// for(i=0; i<=10; i++){
//     console.log(i)
// }

// const arr=[2,4,8,4,5,4,4];
// arr.filter((item)=>{
//      console.log(item);
// })
// console.log(arr)
// console.log('testing');
// const http = require("http");
// const color = require('colors');
http.createServer((req,res) =>{
        res.write("<h1>Hello This is Sukhram Gupta </h1>");
        res.write("<h1>This is first URL new</h1>".red);
        res.end();
}).listen(4000);
console.log("hello");