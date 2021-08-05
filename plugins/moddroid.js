/* Copyright (C) 2021 srezz.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const got = require('got');

const Language = require('../language')
const Lang = Language.getString('weather')

Asena.addCommand({ pattern: 'modd ?(.*)', fromMe: false, desc: "Finds mod verssion." },  (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a app name.```', MessageType.text, { quoted: message.data });       
    let url = `https://api.lolhuman.xyz/api/moddroid?apikey=qamdi5652&query=${match[1]}&plot=full`
    const response = await got(url);
    const json = JSON.parse(response.body);
    if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
    let msg = '```'; 
    msg += `Name : ' + json.name + '\n\n';
    msg += `Link : ' + json.link + '\n\n'; 
    await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));
