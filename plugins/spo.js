/* sreezz/alpha*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('spotify');

Asena.addCommand({ pattern: 'spotify ?(.*)', fromMe: true, desc: "```Download song from spotify```",  (async (message, match) => {

        const link = match[1]
    
         if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a link```',MessageType.text)
    
        await axios
          .get(`https://api.lolhuman.xyz/api/spotify?apikey=qamdi5652&url=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const profileBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,Lang.SPO_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(profileBuffer.data), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,'```NOT FOUND```',MessageType.text, {quoted: message.data});
           
     }));
