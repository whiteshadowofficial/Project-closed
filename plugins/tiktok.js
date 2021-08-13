const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const read = require('../config');

Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: true, desc: "Download video from tik tok" }, (async (message, match) => {
    
     const tkurl = match[1]
    
      if (!tkurl) return await message.client.sendMessage(message.jid,Lang.NEED_WORD);
    
        await axios
          .get(`https://api.lolhuman.xyz/api/tiktok3?apikey=queenamdipublic&url=${tkurl}`)
          .then(async (response) => {
              const {
                result,
                status,
              } = response.data
    
              await message.client.sendMessage(message.jid, '```Give me a link```',MessageType.text, {quoted: message.data});
              const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})
    
              const msg = `${status}`
    
        if (msg === '500') { await message.client.sendMessage(message.jid, '```Invalid link```',MessageType.text, {quoted: message.data})}
              
        if (msg === '200') {
          await message.client.sendMessage(message.jid, '```Uploading yor video```',MessageType.text, {quoted: message.data});
          await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video);
            
}));
