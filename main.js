import fetch from "node-fetch";

const token = "token goes here"; // 70 character long user authentification token of mixed characters
const userId = "user-id goes here"; // 18 character long user id of only numbers

let iteration = 0;

// set status every delay number of seconds
const delay = 15;

setInterval(async ()=>{

    const status = "this status is brought to you by js: " + iteration++;

    const hexLength = String.fromCharCode(status.length);
    const hexLengthPlus2 = String.fromCharCode(status.length+2);
    const hexLengthPlus15 = String.fromCharCode(status.length+15);

    const result = (await fetch('https://discordapp.com/api/v9/users/@me/settings-proto/1', {
        method: 'PATCH',
        headers: {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.6',
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            'Authorization': token,
            'Origin': 'https://discord.com',
            'Referer': `https://discord.com/channels/@me/${userId}`,
            'Sec-GPC': '1',
        },
        body: JSON.stringify({"settings":btoa(`Z${hexLengthPlus15}\n\x05\n\x03dnd\x12${hexLengthPlus2}\n${hexLength}${status}\x1A\x02\b\x01`)})
    }));
    
    console.log(result);
}, delay*1000);

/*
Z\x13\n\x05\n\x03dnd\x12\x06\n\x04test\x1A\x02\b\x01 WhMKBQoDZG5kEgYKBHRlc3QaAggB
Z\x15\n\x05\n\x03dnd\x12\b\n\x06tested\x1A\x02\b\x01 WhUKBQoDZG5kEggKBnRlc3RlZBoCCAE=
Z\x16\n\x05\n\x03dnd\x12\t\n\x07testing\x1A\x02\b\x01 WhYKBQoDZG5kEgkKB3Rlc3RpbmcaAggB
Z\x11\n\x05\n\x03dnd\x12\x04\n\x02te\x1A\x02\b\x01 WhEKBQoDZG5kEgQKAnRlGgIIAQ==
Z\x10\n\x05\n\x03dnd\x12\x03\n\x01t\x1A\x02\b\x01 WhAKBQoDZG5kEgMKAXQaAggB
Z\x13\n\x05\n\x03dnd\x12\x06\n\x04hmmm\x1A\x02\b\x01 WhMKBQoDZG5kEgYKBGhtbW0aAggB
Z\x1A\n\x05\n\x03dnd\x12\r\n\vinteresting\x1A\x02\b\x01 WhoKBQoDZG5kEg0KC2ludGVyZXN0aW5nGgIIAQ==
*/