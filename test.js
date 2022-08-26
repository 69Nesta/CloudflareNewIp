const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { Color } = require('color-in-terminal');

const data = [
    {
        id: 'bc4ce88d2b58942aaccc64101780932c',
        zone_id: '9e1705795f986c3111867bac37e93ddf',
        zone_name: 'cheznestor.fr',
        name: 'cheznestor.fr',
        type: 'A',
        content: '86.200.68.90',
        proxiable: true,
        proxied: true,
        ttl: 1,
        locked: false,
        meta: {
            auto_added: false,
            managed_by_apps: false,
            managed_by_argo_tunnel: false,
            source: 'primary'
        },
        created_on: '2022-07-26T23:48:04.298617Z',
        modified_on: '2022-08-25T17:14:48.531031Z'
    },
    {
        id: '087dcb20b3b8588405a0b71b7736037f',
        zone_id: '9e1705795f986c3111867bac37e93ddf',
        zone_name: 'cheznestor.fr',
        name: 'dash.cheznestor.fr',
        type: 'A',
        content: '86.200.68.90',
        proxiable: true,
        proxied: true,
        ttl: 1,
        locked: false,
        meta: {
            auto_added: false,
            managed_by_apps: false,
            managed_by_argo_tunnel: false,
            source: 'primary'
        },
        created_on: '2022-07-23T23:48:51.657731Z',
        modified_on: '2022-08-25T17:15:13.276838Z'
    },
    {
        id: 'ccf939f46e481d1b32d99627a2de75f7',
        zone_id: '9e1705795f986c3111867bac37e93ddf',
        zone_name: 'cheznestor.fr',
        name: 'game01.cheznestor.fr',
        type: 'A',
        content: '90.114.70.96',
        proxiable: true,
        proxied: true,
        ttl: 1,
        locked: false,
        meta: {
            auto_added: false,
            managed_by_apps: false,
            managed_by_argo_tunnel: false,
            source: 'primary'
        },
        created_on: '2022-07-23T23:48:18.344597Z',
        modified_on: '2022-08-26T01:15:36.568814Z'
    },
    {
        id: 'f7fbcd51a0d79fc3761f0a2f952fdeee',
        zone_id: '9e1705795f986c3111867bac37e93ddf',
        zone_name: 'cheznestor.fr',
        name: 'game01.cheznestor.fr',
        type: 'A',
        content: '86.200.68.90',
        proxiable: true,
        proxied: true,
        ttl: 1,
        locked: false,
        meta: {
            auto_added: false,
            managed_by_apps: false,
            managed_by_argo_tunnel: false,
            source: 'primary'
        },
        created_on: '2022-07-23T23:49:45.226279Z',
        modified_on: '2022-08-25T17:15:22.525411Z'
    },
    {
        id: 'af931f5deb8625e6ac3249d854f32068',
        zone_id: '9e1705795f986c3111867bac37e93ddf',
        zone_name: 'cheznestor.fr',
        name: 'mail.cheznestor.fr',
        type: 'A',
        content: '86.200.68.90',
        proxiable: true,
        proxied: true,
        ttl: 1,
        locked: false,
        meta: {
            auto_added: false,
            managed_by_apps: false,
            managed_by_argo_tunnel: false,
            source: 'primary'
        },
        created_on: '2022-07-27T00:04:38.900347Z',
        modified_on: '2022-08-25T17:15:42.669406Z'
    },
    {
        id: 'd928a02394b49fed0398a9327601b3ae',
        zone_id: '9e1705795f986c3111867bac37e93ddf',
        zone_name: 'cheznestor.fr',
        name: 'play.cheznestor.fr',
        type: 'A',
        content: '86.200.68.90',
        proxiable: true,
        proxied: false,
        ttl: 1,
        locked: false,
        meta: {
            auto_added: false,
            managed_by_apps: false,
            managed_by_argo_tunnel: false,
            source: 'primary'
        },
        created_on: '2022-07-23T23:49:11.619569Z',
        modified_on: '2022-08-25T17:16:03.640772Z'
    },
    {
        id: '7c5ef6b1a07e66d3f0f3c3419cbf4064',
        zone_id: '9e1705795f986c3111867bac37e93ddf',
        zone_name: 'cheznestor.fr',
        name: 'cheznestor.fr',
        type: 'MX',
        content: 'route3.mx.cloudflare.net',
        priority: 42,
        proxiable: false,
        proxied: false,
        ttl: 1,
        locked: false,
        meta: {
            auto_added: false,
            email_routing: true,
            managed_by_apps: false,
            managed_by_argo_tunnel: false,
            read_only: true,
            source: 'primary'
        },
        created_on: '2022-07-26T23:40:27.170056Z',
        modified_on: '2022-07-26T23:40:27.170056Z'
    },
    {
        id: '9f65d8986a61c2e6b6a49347f5cbd6a4',
        zone_id: '9e1705795f986c3111867bac37e93ddf',
        zone_name: 'cheznestor.fr',
        name: 'cheznestor.fr',
        type: 'MX',
        content: 'route2.mx.cloudflare.net',
        priority: 32,
        proxiable: false,
        proxied: false,
        ttl: 1,
        locked: false,
        meta: {
            auto_added: false,
            email_routing: true,
            managed_by_apps: false,
            managed_by_argo_tunnel: false,
            read_only: true,
            source: 'primary'
        },
        created_on: '2022-07-26T23:40:27.163173Z',
        modified_on: '2022-07-26T23:40:27.163173Z'
    },
    {
        id: '504cbdd474872a67304c7bc97e3a43a2',
        zone_id: '9e1705795f986c3111867bac37e93ddf',
        zone_name: 'cheznestor.fr',
        name: 'cheznestor.fr',
        type: 'MX',
        content: 'route1.mx.cloudflare.net',
        priority: 20,
        proxiable: false,
        proxied: false,
        ttl: 1,
        locked: false,
        meta: {
            auto_added: false,
            email_routing: true,
            managed_by_apps: false,
            managed_by_argo_tunnel: false,
            read_only: true,
            source: 'primary'
        },
        created_on: '2022-07-26T23:40:27.153059Z',
        modified_on: '2022-07-26T23:40:27.153059Z'
    },
    {
        id: 'ef13f5a1dab3465e865a1edfcd4bea2b',
        zone_id: '9e1705795f986c3111867bac37e93ddf',
        zone_name: 'cheznestor.fr',
        name: 'cheznestor.fr',
        type: 'TXT',
        content: 'v=spf1 include:_spf.mx.cloudflare.net ~all',
        proxiable: false,
        proxied: false,
        ttl: 1,
        locked: false,
        meta: {
            auto_added: false,
            managed_by_apps: false,
            managed_by_argo_tunnel: false,
            source: 'primary'
        },
        created_on: '2022-07-26T23:40:27.176026Z',
        modified_on: '2022-07-26T23:40:27.176026Z'
    }
];

(() => {
    let maxl = 0;
    data.forEach(e => { if (maxl < e.name.length) { maxl = e.name.length }});

    data.forEach(element => {
        let nameConsole = element.name
        if (nameConsole.length < maxl) {
            for (let index = 0; index <= maxl - nameConsole.length; index++) {
                nameConsole = nameConsole + '\u0020\u0020'
            }
        }
        // console.log(nameConsole + '|')
        console.log(` ${Color.FgCyan}*${Color.Reset}  ${Color.FgMagenta}${nameConsole}${Color.Reset} ${Color.FgBlue} -> ${Color.FgRed} Failed`)
    })
    // console.log(` ${Color.FgCyan}*${Color.Reset}  ${Color.FgMagenta}${'mail.cheznestor.fr'}${Color.Reset} ${Color.FgBlue} -> ${Color.FgGreen} Ok`)
})();
