const dotenv = require('dotenv');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const IsIp = require('isip');

dotenv.config({ path: './.env' });

let last_ip = '';

(async () => {
    const Ip = (await (await fetch('https://api.ipify.org?format=json', { method: 'GET' })).json()).ip;
    UpdateIps(Ip);
    last_ip = Ip;

    setInterval(async () => {
        const NewIp = (await (await fetch('https://api.ipify.org?format=json', { method: 'GET' })).json()).ip;

        if (NewIp != last_ip) {
            UpdateIps(NewIp);
            last_ip = NewIp
        }
    }, 1000 * 60 * 10);
    // 10 min

})();

async function UpdateIps(NewIp) {
    const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${process.env.ZONE}/dns_records`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + process.env.API_KEY,
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();

    await data.result.forEach(async element => {
        if (IsIp(element.content)) {
            const response1 = await fetch(`https://api.cloudflare.com/client/v4/zones/${process.env.ZONE}/dns_records/${element.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    type: element.type,
                    name: element.name,
                    content: NewIp.toString(),
                    proxied: element.proxied
                }),
                headers: {
                    'Authorization': 'Bearer ' + process.env.API_KEY,
                    'Content-Type': 'application/json',
                }
            });

            const data1 = await response1.json();

            if (!data1.success) {
                FailedList.push(element)
                console.log(`Failed : ${element.name}`)
            } else {
                console.log(`Good : ${element.name}`)
            }
        }
    });
    console.log('NewIp : ' + NewIp)
    console.log('Failed : ' + FailedList.length)
}