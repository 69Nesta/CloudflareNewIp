const dotenv = require('dotenv');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const IsIp = require('isip');
const { Color } = require('color-in-terminal')

dotenv.config({ path: './.env' });

let last_ip = '';

(async () => {
    const Ip = (await (await fetch('https://api.ipify.org?format=json', { method: 'GET' })).json()).ip;
    UpdateIps(Ip);
    last_ip = Ip;
    debug('Nouvel ip : ' +Ip)

    setInterval(async function () {
        const NewIp = (await (await fetch('https://api.ipify.org?format=json', { method: 'GET' })).json()).ip;

        if (NewIp != last_ip) {
            UpdateIps(NewIp);
            last_ip = NewIp
            debug('Nouvel ip : ' +NewIp)
        } else {
            debug('------------------------------')
            debug(`${Color.FgGreen}Il n'y a pas eu de changement d'ip !${Color.Reset}`)
        }
    }, 1000 * 60 * 1);
    //             ^
    // 1 min ------|

})();

async function UpdateIps(NewIp) {
    let maxl = 0;

    const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${process.env.ZONE}/dns_records`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + process.env.API_KEY,
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();

    console.log('------------------------------')
    data.result.forEach(async element => {
        if (maxl < element.name.length) { maxl = element.name.length }

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
            let nameConsole = element.name
            if (nameConsole.length < maxl) {
                for (let index = 0; index <= maxl - nameConsole.length; index++) {
                    nameConsole = nameConsole + '\u0020\u0020'
                }
            }

            if (!data1.success) {
                FailedList.push(element)
                debug(` ${Color.FgCyan}*${Color.Reset}  ${Color.FgMagenta}${nameConsole}${Color.Reset} ${Color.FgBlue} -> ${Color.FgRed} Failed${Color.Reset}`)
            } else {
                debug(` ${Color.FgCyan}*${Color.Reset}  ${Color.FgMagenta}${nameConsole}${Color.Reset} ${Color.FgBlue} -> ${Color.FgGreen} Ok${Color.Reset}`)
            }
        }
    });
}

function debug(text) {
    if (process.env.DEBUG) 
        console.log(text)
    else 
        return
}