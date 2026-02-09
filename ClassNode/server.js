// const { resolve } = require('dns');
// const http = require ('http');
// const fs=require('fs');
//  http.createServer((request,response)=>{
//     console.log(request);
//     fs.appendFile("log.txt",`${Date.now()}:New Request recorded\n`);
//     (err)=>{
//         if(err)console.log(err)
//     }
//     response.setHeader("access-control-allow-origin","*")
//     response.write("server started successfully")
//     response.end();
// }).listen(3000,'localhost',()=>{

//     console.log("server is listening on http://localhost:3000");
// });

// const fs = require('fs');
// const http = require ('http')

//  http.createServer((request,response)=>{
//     console.log(request);
//     const Date=new Date();
//     fs.appendFile("log.txt", data, callback)
//     fs.appendFile("log.txt",`${Date}:New request recorded\n`,(err)=>{
//         if(err)console.log(err);
//     });
//     response.setHeader("access-control-allow-origin","*")
//     response.write("server started successfully")
//     response.end();
// }).listen(3000,'localhost',()=>{

//     console.log("server is listening on http://localhost:3000");
// });

// const fs = require('fs');
// const http = require('http');

// http.createServer((request, response) => {
//     console.log(request);

//     const currentDate = new Date();

//     fs.appendFile(
//         "log.txt",
//         `${currentDate}: New request recorded\n`,
//         (err) => {
//             if (err) console.log(err);
//         }
//     );

//     response.setHeader("Access-Control-Allow-Origin", "*");
//     response.write("server started successfully");
//     response.end();

// }).listen(3000, 'localhost', () => {
//     console.log("server is listening on http://localhost:3000");
// });
