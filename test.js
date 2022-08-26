const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

(async () => {
    const responseIp = (await (await fetch('https://api.ipify.org?format=json', { method: 'GET' })).json()).ip;
    // const ip = (await responseIp.json()).ip;
    console.log(responseIp)
})();
