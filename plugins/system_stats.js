/* Copyright (C) 2020 TOXIC DEVIL

CODDED BY TOXIC DEVIL

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```💕 Hey Bro!! I am still alive & kicking 😙```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n\n*Developer:* Kaweesha Chamod\n\n*Git :* https://github.com/Kaweeshachamodk/Stefanie_.git\n\n```💕 Copyright © 2021 💞\n Also Feel free to contribute & issue ( report issues & feature request on issue session of the ropo ).. ( https://kaweeshachamodk.github.io/Stefanie_/ ) 🙂❤️```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Made By Kaweesha Chamod*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```💕 Hey Bro!! I am still alive & kicking 😙```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n\n*Developer:* Kaweesha Chamod\n\n*Git :* https://github.com/Kaweeshachamodk/Stefanie_.git\n\n```💕 Copyright © 2021 💞\n Also Feel free to contribute & issue ( report issues & feature request on issue session of the ropo ).. ( https://kaweeshachamodk.github.io/Stefanie_/ ) 🙂❤️```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Made By Kaweesha Chamod*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
} 
