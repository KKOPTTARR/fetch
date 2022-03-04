import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fetch = require("node-fetch");

async function getData() {
    let url = 'https://api.github.com/users/github';
    try {
        let response = await fetch(url);
        console.log(response)
        // //返回一个promise实例
        // return await response.json();
    } catch (error) {
        console.log('Request Failed', error);
    }
}
//调用
getData()
