const fetch = require("node-fetch");
const fs = require("fs");

fetch("https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi",   {
    method: 'GET',
    headers: { 'Content-Type': 'application/octet-stream' },
}).then(res => res.buffer()).then(_=>{
    fs.writeFile("Downloads", _, "binary", function (err) {
        if (err) console.error(err);
        else console.log("下载成功");
    });
})