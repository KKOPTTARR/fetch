const fetch = require("node-fetch");

const body = { a: 12 };

const response = fetch('https://httpbin.org/post', {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.text())
    .then(json => console.log(json));
