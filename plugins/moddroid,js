/* Copyright (C) 2021 srezz.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const got = require('got');

const Language = require('../language')
const Lang = Language.getString('weather')

Asena.addCommand({ pattern: 'modd ?(.*)', fromMe: true, desc: Lang.USAGE,  deleteCommand: false }, async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);   
    var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});
    let url = `https://api.lolhuman.xyz/api/moddroid?apikey=qamdi5652&query=${match[1]}`
    const response = await got(url);
    const json = JSON.parse(response.body);
    let msg = '```'; = ""
    msg += `Name : ' + json.name + '\n\n';
    msg += `Link : ' + json.link + '\n\n'; 
    await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));
