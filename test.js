const dotenv = require('dotenv');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { Color } = require('color-in-terminal');

dotenv.config({ path: './.env' });

(async () => {

    console.error((await (await fetch('https://api.ipify.org?format=json', { method: 'GET' })).json()).ip)

    // setInterval(async function () {
    //     console.log('ffff')
    // }, 1000);
   
    // const response1 = await fetch(`https://api.cloudflare.com/client/v4/user/tokens`, {
    //     method: 'GET',
    //     // body: JSON.stringify({
    //     //     type: element.type,
    //     //     name: element.name,
    //     //     content: NewIp.toString(),
    //     //     proxied: element.proxied
    //     // }),
    //     headers: {
    //         'Authorization': 'Bearer ' + process.env.API_KEY,
    //         'Content-Type': 'application/json',
    //     }
    // });

    // const data1 = await response1.json();
    // console.log(data1)
})();
