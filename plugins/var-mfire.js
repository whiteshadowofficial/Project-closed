/* # Exclusively from VIRUS FUCKER Project 
# Do not use this fore any commercial thing
# Do not edit (Respect to the Devaoloper) 
# All rights reserved VIRUS FUCKER https://Wa.me/9476777777
# Credit : usufusta-whatsappAsena
*/

const Stefanie = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const config = require('../hatzu');
const Language = require('../language');
const MMM = "Mediafire Download List."
const M_NEED = "Need mediafire Link"
const M_D = "*...Downloading your akp...*"
const M_UP = "*Uploading your apk...*"
const NO_RESULT = "*⚙️can't Find Anything...*"
let tn = Config.WORKTYPE == 'public' ? false : true

Stefanie.addCommand({pattern: 'mediafire', fromMe: tn, desc: MMM}, (async (message, match) => {
  await message.sendMessage('*╭─「 STEFANIE MEDIAFIRE DOWNLOADER 」*\n│ ╰────\n╭─「 COMMANDS」\n│ \n│ • afire <your mediafire APK Link >\n│ • pfire <your mediafire PDF link>\n「 ©️Stefanie virusFucker」');
  
}));

 Stefanie.addCommand({ pattern: 'pfire ?(.*)', fromMe: tn, dontAddCommandList:true,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,M_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,M_D,MessageType.text);
        await axios
          .get(`https://api.zeks.xyz/api/mediafire?apikey=${config.XAPI}&url=${link}`)
          .then(async (response) => {
            const {
              download,
            } = response.data
    
            const teenux = await axios.get(download, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,M_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(teenux.data), MessageType.document, {mimetype: Mimetype.pdf, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )


Stefanie.addCommand({ pattern: 'afire ?(.*)', fromMe: tn, dontAddCommandList:true,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,M_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,M_D,MessageType.text);
        await axios
          .get(`https://api.zeks.xyz/api/mediafire?apikey=${config.XAPI}&url=${link}`)
          .then(async (response) => {
            const {
              download,
            } = response.data
    
            const teenux = await axios.get(download, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,M_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(teenux.data), MessageType.document, {mimetype: 'application/octet-stream', quoted: message.data})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
