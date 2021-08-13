const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "Image Maker"
const need = "```YOU MUST ENTER WORDS!```"

if (Config.WORKTYPE == 'public') {

//ZRUN

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/harrypotter?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({pattern: 'retrolol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/retrolol?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/shadow?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({pattern: 'romantic ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/romantic?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({pattern: 'butterfly ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/butterfly?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    Asena.addCommand({pattern: 'coffecup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/coffecup?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

   await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

}

else if (Config.WORKTYPE == 'private') {

//ZRUN

Asena.addCommand({ pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/harrypotter?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

Asena.addCommand({ pattern: 'retrolol ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/retrolol?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

Asena.addCommand({ pattern: 'shadow ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/shadow?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

Asena.addCommand({ pattern: 'romantic ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/romantic?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

Asena.addCommand({ pattern: 'butterfly ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/butterfly?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

Asena.addCommand({ pattern: 'coffecup ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(need);

  var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/photooxy/coffecup?text=${match[1]}&apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY })

}));

}
