/* Copyright (C) 2021 srezz.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'modd ?(.*)', fromMe: false, desc: "gives mod apps." }, async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = 'https://api.lolhuman.xyz/api/moddroid?apikey=6d8f65061357712bad246857&query=${match[1]}&plot=full'
	        const response = await got(url);
		const json = JSON.parse(response.body);
		if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found..*', MessageType.text, { quoted: message.data });
                let msg = '```';
		msg += '*🏷️ ' + Lang.NAME +'* ```' + json.result[0].name + '```\n\n';
		msg += '*🅿️ ' + Lang.LINK +':* ```' + json.result[0].link + '```\n\n';
		await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));
 
/*
Asena.addCommand({pattern: 'apkp ?(.*)', fromMe: false, desc: "Mod apk from apkpure"}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://docs-jojo.herokuapp.com/api/apk-pure?q=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*🏷️ ' + Lang.NAMEY +'* ```' + match[1] + '```\n\n' +
		'*📝 ' + Lang.MODINFO +':* ```' + json.result[0].version + '```\n\n' + 
		'*📦 ' + Lang.SIZE +'* ```' + json.result[0].filesize + '```\n\n' + 
		'*⬇️ ' + Lang.DOWNLOAD +':* ```' + json.result[0].url + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, "oops ;)", MessageType.text);
	}
});
Asena.addCommand({pattern: 'apkp ?(.*)', fromMe: false, desc: "Mod apk from apkpure"}, async (message, match) => {
	const url = `https://leyscoders-api.herokuapp.com/api/apkpure?q=${match[1]}&apikey=VFCQVEWL`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*🏷️ ' + Lang.NAMEY +'* ```' + match[1] + '```\n\n' +
		'*⬇️ ' + Lang.DOWNLOAD +':* ```' + json.result[0].url + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
*/
