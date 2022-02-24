const fetch = require("node-fetch");
const config = require("./config.json");

const getNonce = require("./modules/genNonce");

setInterval(() => {
    fetch(`https://discord.com/api/v9/channels/${config.channel_id}/messages`, {
        "headers": {
        "accept": "*/*",
        "accept-language": "de,de-DE;q=0.9",
        "authorization": config.auth,
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "en-US",
        "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImRlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTEyODI0LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==",
        "cookie": "__dcfduid=17f2eef13dc308cde44c4cc2eb40b5fc; __stripe_mid=13f0a423-17cb-401d-98c4-d6af8fed1d10cbe11f; __sdcfduid=36ab1eb0f44f11ebbe29abc9c46b67b395f92c715394bd478ccfa7ce0305d5d1195f9e4dbcef856fb973bf314123e2ec; locale=en-US"
        },
        "referrer": `https://discord.com/channels/${config.server_id}/${config.channel_id}`,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"content\":\"pls hunt\",\"nonce\":\"${getNonce().toString()}\",\"tts\":false}`,
        "method": "POST",
        "mode": "cors"
    });
}, 50000);

setInterval(() => {
    fetch(`https://discord.com/api/v9/channels/${config.channel_id}/messages`, {
        "headers": {
        "accept": "*/*",
        "accept-language": "de,de-DE;q=0.9",
        "authorization": config.auth,
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "en-US",
        "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImRlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTEyODI0LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==",
        "cookie": "__dcfduid=17f2eef13dc308cde44c4cc2eb40b5fc; __stripe_mid=13f0a423-17cb-401d-98c4-d6af8fed1d10cbe11f; __sdcfduid=36ab1eb0f44f11ebbe29abc9c46b67b395f92c715394bd478ccfa7ce0305d5d1195f9e4dbcef856fb973bf314123e2ec; locale=en-US"
        },
        "referrer": `https://discord.com/channels/${config.server_id}/${config.channel_id}`,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"content\":\"pls fish\",\"nonce\":\"${getNonce().toString()}\",\"tts\":false}`,
        "method": "POST",
        "mode": "cors"
    });
}, 40000);

setInterval(() => {
    fetch(`https://discord.com/api/v9/channels/${config.channel_id}/messages`, {
        "headers": {
        "accept": "*/*",
        "accept-language": "de,de-DE;q=0.9",
        "authorization": config.auth,
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "en-US",
        "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImRlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTEyODI0LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==",
        "cookie": "__dcfduid=17f2eef13dc308cde44c4cc2eb40b5fc; __stripe_mid=13f0a423-17cb-401d-98c4-d6af8fed1d10cbe11f; __sdcfduid=36ab1eb0f44f11ebbe29abc9c46b67b395f92c715394bd478ccfa7ce0305d5d1195f9e4dbcef856fb973bf314123e2ec; locale=en-US"
        },
        "referrer": `https://discord.com/channels/${config.server_id}/${config.channel_id}`,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"content\":\"pls daily\",\"nonce\":\"${getNonce().toString()}\",\"tts\":false}`,
        "method": "POST",
        "mode": "cors"
    });
}, 14400000);

setInterval(() => {
    fetch(`https://discord.com/api/v9/channels/${config.channel_id}/messages`, {
        "headers": {
        "accept": "*/*",
        "accept-language": "de,de-DE;q=0.9",
        "authorization": config.auth,
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "en-US",
        "x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDAzIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDIiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImRlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTEyODI0LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==",
        "cookie": "__dcfduid=17f2eef13dc308cde44c4cc2eb40b5fc; __stripe_mid=13f0a423-17cb-401d-98c4-d6af8fed1d10cbe11f; __sdcfduid=36ab1eb0f44f11ebbe29abc9c46b67b395f92c715394bd478ccfa7ce0305d5d1195f9e4dbcef856fb973bf314123e2ec; locale=en-US"
        },
        "referrer": `https://discord.com/channels/${config.server_id}/${config.channel_id}`,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"content\":\"pls beg\",\"nonce\":\"${getNonce().toString()}\",\"tts\":false}`,
        "method": "POST",
        "mode": "cors"
    });
}, 46000);