const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "6281214552942"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = ''
global.github = ''
global.location = 'Indonesia'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '6281214552942' 
global.devs = '6281214552942';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+62000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.postimg.cc/d0pkpFTM/IMG-20240213-WA0003.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU85SFo0RUtkdnVBMnZ6Wit5VUNKU2EvcWhENUZZeWExdndqQ1FhOTlYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkwyMkJpR2J0eXcxVXVpYWJNK3RrSHVYYVpiTlRZYStVVnltY2dEeUYyND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQTlBYWplVzVVTTJLclJGdlJnWU12UG5wcVZRQW5zTkd5R1k3OEFJVld3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTFFNRjlxNitWVnVTdTNPQ1RPZFZQRm8wR1BVVmVEa1lFRzdIWCtTUWtFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MdVh3Ny84YVV2aENvdGZlTGlSS0FXeVkrY1hNOUhXMTQ2b0xiWGxpMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJWUXpyZlVMOHZ2eG1CdDJUdE4vakxtWEZraXVJQ084ajdUbE1sMFk3REE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ01tb3E4U0U1Nm5oTjNrd3RXZXhGZU8zcW9DcG9MYmNmTlNpK2FWWVdIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHE3dmNpQkl6OW5qdzY0NXpwdFZzd2pxV0tKSVN3c1Mydjc2OU9zZDd4QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVYcmc4bE9LYUl1Z3JqZE9mUnpnRVpmRFlNTGROdDZJSWNRSGZIdWhPVk9JVEF4eUlxT0duSGtTNUpwN295bC9KMHdHV3k5emhiUENScW9lQ1ZXcmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ3LCJhZHZTZWNyZXRLZXkiOiJLZnpRT0lOUHNOTjhmaDQxLzYxNS9sVURiaW5kL3pXUUNxVFFmallvNFR3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoYWZFU0N4RlNHeWc1SzhsdlkzUk1nIiwicGhvbmVJZCI6IjA1NmQ0OTExLTc4MzctNGQwMy1iYmNhLTE3M2IxZTZjN2EwYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySU5uTzVBT2R5ZEhuc0d2UGdQcTNhUjcwa1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURxNy91WWIvSGZ6SHlQNG1PUVREa1kxSEZVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY4N05ISEw0IiwibWUiOnsiaWQiOiI2MjgxMjE0NTUyOTQyOjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFSRElPTiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3FaMllZREVOakJzcTRHR0FRPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2MEN2dUdhTFAyUGkvWWhqaDJqQW9BV2hDV0JzcjVTZUd6ZVpCQ1hhdHdBPSIsImFjY291bnRTaWduYXR1cmUiOiJqbGplNGQweVNyUHhtVzQwOFkzRjUzTE80T0RuUCthTDVzMm95by8wVFdMY3JHWXE2dmtadVhqOWVZaFNCM0NNUkQrb3lqSDV4RHJ5c2VPaWUxRVJDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieGtGNmlKbjA2RDVMeVdOTDc1a1VML1JKclg5SG9NeFgxdWttcDcxWlpTWE5UN1QwRzFZNUpQTlRhOUoxci9zYWRCYVRFNmtIOC9yYjB2Znh3ZStXanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MjgxMjE0NTUyOTQyOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI5QXI3aG1pejlqNHYySVk0ZG93S0FGb1FsZ2JLK1VuaHMzbVFRbDJyY0EifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDc5MDkzNDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWZ0In0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'CREATE BY',
  packname:  process.env.PACK_NAME || 'ARDION',
   
  botname:   process.env.BOT_NAME === undefined ? "ARBOT" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ARDION' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
