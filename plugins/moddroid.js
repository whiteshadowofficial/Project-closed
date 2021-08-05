/* Copyright (C) 2021 srezz.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const got = require('got');
const cn = require('../config');
const { fetchJson, getBuffer } = require('./fetcher')

const Language = require('../language')
const Lang = Language.getString('weather')


if (cn.WORKTYPE == 'private') {
    Asena.addCommand({ pattern: 'modd ?(.*)', fromMe: true, desc: Lang.USAGE,  deleteCommand: false }, async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/moddroid?apikey=qamdi5652&query=${match[1]}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }

    await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data});
    await reply.delete();
  })

  Asena.addCommand({ pattern: 'spo ?(.*)', fromMe: true, desc: Lang.USAGE,  deleteCommand: false }, async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=qamdi5652&query=${match[1]}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }

    await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data});
    await reply.delete();
  })
}
else if (cn.WORKTYPE == 'public') {
  Asena.addCommand({ pattern: 'modd ?(.*)', fromMe: false, desc: Lang.USAGE }, async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/moddroid?apikey=qamdi5652&query=${match[1]}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }

    await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data});
    await reply.delete();
  })

  Asena.addCommand({ pattern: 'spo ?(.*)', fromMe: false, desc: Lang.USAGE,  deleteCommand: false }, async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=qamdi5652&query=${match[1]}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }

    await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data});
    await reply.delete();
  })

}
