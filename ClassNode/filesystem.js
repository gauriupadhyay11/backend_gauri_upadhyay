// const fs = require("fs");
// const fd = fs.openSync("fc.txt", flag="w+");
// fs.writeSync(fd,"Hello\nHow are u?");
// const buffer=Buffer.alloc(50);
// const data = fs.readSync(fd,buffer,0,buffer.length,0);
// console.log(buffer.toString("uft8",0,data));

// const fs = require("fs");
// fs.writeFileSync("dummy.txt","Hello JavaScript\n",{flag:"w"});
// console.log(fs.readFileSync("dummy.txt","uft8"));
// const fa = fs.appendFileSync("dummy.txt","Helllioo");
// fs.renameSync()
// fs.cpSync()
// fs.unlinkSync()



// fs.writeFile("dummy.txt","Hello Sec fc",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file created successfully");
//     }
// });

// const fs = require("fs");
// const data = fs.readFileSync("dummy.txt", "utf8");
// for (let ch of data) {
//     console.log(ch);
// }


const fs = require("fs");
fs.writeFile("dummy.txt", "Hello Sec fc", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file created successfully");
        fs.readFile("dummy.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                for (let char of data) {
                    console.log(char);
                }
            }
        });
    }
});
