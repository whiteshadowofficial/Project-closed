/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

    
    if (Config.ALIVEMSG == 'default') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/VID-20210209-WA0058.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.gif, caption: "*▬🐺> ★ ᴀʟᴘͥʜͭᴀᷤ ʙͫᴏͤᴛ ★ < 🐺▬*\n```🔰ᵖᵒʷᵉʳᵈ ᵇʸ ʷʰᵃᵗˢᴬˢᵉⁿᵃⁿᵃ🔰```\n\n➢   *Hosted  •~* ```Heroku ✓```\n➢   *Version •~* ```v3.2 Beta ✓```\n➢   *Branch •~* ```Master ✓```\n>\n```https://chat.whatsapp.com/DQmOkafYuZGFDBWVcGB0Gw```\n**\n```Copyright All rights reserverd```" }
        )
    }
}
if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

    
    if (Config.ALIVEMSG == 'default') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/VID-20210209-WA0058.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.gif, caption: "*▬🐺> ★ ᴀʟᴘͥʜͭᴀᷤ ʙͫᴏͤᴛ ★ < 🐺▬*\n```🔰ᵖᵒʷᵉʳᵈ ᵇʸ ʷʰᵃᵗˢᴬˢᵉⁿᵃⁿᵃ🔰```\n\n➢   *Hosted  •~* ```Heroku ✓```\n➢   *Version •~* ```v3.2 Beta ✓```\n➢   *Branch •~* ```Master ✓```\n>\n```https://chat.whatsapp.com/DQmOkafYuZGFDBWVcGB0Gw```\n**\n```Copyright All rights reserverd``` " }
        )
    }
}));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
