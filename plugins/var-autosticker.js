/* # Exclusively from VIRUS FUCKER Project 
# Do not use this fore any commercial thing
# Do not edit (Respect to the Devaoloper) 
# All rights reserved VIRUS FUCKER https://Wa.me/9476777777
# Credit : usufusta-whatsappAsena
*/

const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var BGM_on = ''
    var BGM_off = ''
    if (config.LANG == 'TR') {
        l_dsc = 'Antilink aracını etkinleştirir.'
        alr_on = 'Antilink halihazırda açık!'
        alr_off = 'Antilink halihazırda kapalı!'
        BGM_on = 'bgm option turned on!'
        BGM_off = 'bgm option turned off'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'turn on I AUTO STICKER. -bot owner command'
        alr_on = 'AUTO STICKER is already open!'
        alr_off = 'AUTO STICKER is currently closed!'
        BGM_on = 'AUTO STICKER option turned on!'
        BGM_off = 'AUTO STICKER option turned off'
    }
    if (config.LANG == 'SI') {
        l_dsc = 'AUTO STICKER system  ක්‍රියාත්මක කිරීම.'
        alr_on = 'කලින්ම ක්‍රියාත්මකයි!'
        alr_off = 'කලින්ම අක්‍රියයි!'
        BGM_on = '*AUTO STICKER ක්‍රියාත්මයි.*'
        BGM_off = '*AUTO STICKER අක්‍රියයි.*'
    }
    if (config.LANG == 'HI') {
        l_dsc = 'एंटीलिंक टूल को सक्रिय करता है।'
        alr_on = 'एंटीलिंक पहले से ही खुला है!'
        alr_off = 'एंटीलिंक वर्तमान में बंद है!'
        BGM_on = 'bgm option turndा!'
        BGM_off = 'bgm option turned off'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'ആന്റിലിങ്ക് ഉപകരണം സജീവമാക്കുന്നു.'
        alr_on = 'ആന്റിലിങ്ക് ഇതിനകം തുറന്നു!'
        alr_off = 'ആന്റിലിങ്ക് നിലവിൽ അടച്ചിരിക്കുന്നു!'
        BGM_on = 'bgm option turned on'
        BGM_off = 'bgm option turned off'
    }
    if (config.LANG == 'PT') {
        l_dsc = 'Ativa a ferramenta Antilink.'
        alr_on = 'O Antilink já está aberto!'
        alr_off = 'Antilink está fechado no momento!'
        BGM_on = 'bgm option turned on'
        BGM_off = 'bgm option turned off'
    }
    if (config.LANG == 'RU') {
        l_dsc = 'Активирует инструмент Antilink.'
        alr_on = 'Антилинк уже открыт!'
        alr_off = 'Антилинк сейчас закрыт!'
        BGM_on = 'Антилинк успешно открыт!'
        BGM_off = 'bgm option turned off'
    }
    if (config.LANG == 'ES') {
        l_dsc = 'Activa la herramienta Antilink.'
        alr_on = '¡Antilink ya está abierto!'
        alr_off = '¡Antilink está cerrado actualmente!'
        BGM_on = 'bgm option turned on'
        BGM_off = 'bgm option turned off!'
    }
    if (config.LANG == 'ID') {
        l_dsc = 'Mengaktifkan alat Antilink.'
        alr_on = 'Antilink sudah terbuka!'
        alr_off = 'Antilink saat ini ditutup!'
        BGM_on = 'bgm option turned on'
        BGM_off = 'bgm option turned off'
    }
    Asena.addCommand({pattern: 'autosticker ?(.*)', fromMe: true, desc: l_dsc, usage: '.autosticker on / off' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_STICKER']: 'false'
                    } 
                });
                await message.sendMessage(BGM_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_STICKER']: 'true'
                    } 
                });
                await message.sendMessage(BGM_on)
        }
    }));
