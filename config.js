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
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+62000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNtQXNzdXV0bnNZRFpWNjBrQkdzeS9ZcWZ2UzFSZkJYQktIVVRFbzExTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFhmM1lHbVlZWnYwcTRIeHJPbVRPYk9pWkk0ZVZQQ1Rad1NWUlpwaFJtMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUHBIQWN0VjFKakZ5YWR2WnlHY05hRHBIeVdPL2lEK1Z0KzVHTlljZ2xrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUNTRtZVVpNGdZZTJxcGwyS1hiVUhINEY1MEYrKzd6Q2lrWkJ0clA5cHpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLY3djcndUNnpXN083U1hOUkZJRmtraUNyNG9iZEtGM0dUTkpoWHAvRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFaMVRKQ1JybmVwWk0wMGFxeHR6Ym5GN0NmMURQcnUveUNlODNRN3pJQ009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1FcitrcFJWMEZha2xCRk5La0VTeFhnU0M0VWlLYmF4T29wL1UzQWJrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXg4QUR2ckVrVWhwTlhaVnBNdjJaUDVMbTJkZUNFZERxQytkN0d5eXpSdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh0WktwVFVSb01pOU95U1pIVWwxYklrdHdrWURVUkc0bjlDTmtCNnVNbkpDU09sMllnTjhiQ3FnTXVBT0c4SW1UV2FLWnMrVDJ4alN3NE9sMG12Z0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJqTzFmbWJ0SnZsa2w5aG1xaitJSmM0RXVwbS81SWlDVk5BQTVHcjhoY1BvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMQ1lWN21JZFNWbU5GWnJYYjlYT1FRIiwicGhvbmVJZCI6IjFlZTZmNzE1LTQxNDQtNGYxZC05YjE3LTRmYzhhZmFkYzhhNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmK014VG5jUzY0MGNqK0RyYUVuY05Hc0d2Njg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXFld3ZSWktqNHlWbjNkcCt1dEdRZExJOWJNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllaNVpWMVFYIiwibWUiOnsiaWQiOiI2MjgxMjE0NTUyOTQyOjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQVJESU9OIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLcVoyWVlERUwyNHNxNEdHQU09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InYwQ3Z1R2FMUDJQaS9ZaGpoMmpBb0FXaENXQnNyNVNlR3plWkJDWGF0d0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNmMUFKd281YklhM0FsUHpvTjFaa1NDd1laalJPdEZ1QjBaUFF4NGh0RmExeVkvNHRQWUd0YWJDb3FDbTJGLzR4OU9JL0lCOEZCTVp6U3dpYjN4ZkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrSG9YNHJVNWg2RVdiNzgzS3hvbnN0NHp3cXBsQnQvOGxkT28xOU5BWTBhUHY3MHV5bG16SENPRW5SNXJkVlB6Sy9NdnZ3a3ZBQUZ2a3JwVmN2R2NCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODEyMTQ1NTI5NDI6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiOUFyN2htaXo5ajR2MklZNGRvd0tBRm9RbGdiSytVbmhzM21RUWwycmNBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA3OTA4MTYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1mcyJ9",  //PUT Session Id Here, 
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
