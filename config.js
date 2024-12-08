const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_26_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTY4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MixcbiAgICAgICAgMTEyLFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDk5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaWMzY21Td24xTXJVbE42Y1pieDMzckgrNHl6ZGVuT3NwMUN2UnN3cUFhYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicW1OZXFyQlFRTy1aYWZ4TjlCNjZWQVwiLFxuICBcInBob25lSWRcIjogXCJiMTgxYjhhMS1hNWM3LTQ4MjAtOTUzOC0xYTFlNGM0ZmYyNjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDE5MCxcbiAgICAgIDQ4LFxuICAgICAgODMsXG4gICAgICAxNzksXG4gICAgICAxNixcbiAgICAgIDEyOCxcbiAgICAgIDE5NixcbiAgICAgIDE0NyxcbiAgICAgIDE3NyxcbiAgICAgIDEzNCxcbiAgICAgIDIxMixcbiAgICAgIDIxMCxcbiAgICAgIDI4LFxuICAgICAgNzEsXG4gICAgICAxNTksXG4gICAgICAyMzAsXG4gICAgICAxMzEsXG4gICAgICAzMSxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMjMyLFxuICAgICAgMzMsXG4gICAgICAxNTgsXG4gICAgICA4NCxcbiAgICAgIDI0NSxcbiAgICAgIDExMyxcbiAgICAgIDEyNixcbiAgICAgIDE2MSxcbiAgICAgIDIxOSxcbiAgICAgIDY3LFxuICAgICAgMyxcbiAgICAgIDI0MSxcbiAgICAgIDE0MCxcbiAgICAgIDM3LFxuICAgICAgMTgwLFxuICAgICAgMTEzLFxuICAgICAgMTc5LFxuICAgICAgMTk5LFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUE5WNlE1TUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTMyOTA1MTczOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTU5NjQ2MDM1NjgxNDQ6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmpJbFo4SEVQUzUyTG9HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4TkR3S0NOTVVvTU95RFJRY1pHRy9ZTE90Y0NqY21zdTFRYnNBQnhCTjNzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk95TjVXcGZpWkJEekdRSllMK0szT1BhUUw3REVHNTR2UHlNOFlnYVlibG5WaHhwdG53Nno3VFo3QXR0dEhhLzlNeEwzV0drKzlVemkyWFE1RG5uRUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdZYlpmY0MweENVcDdNNnhxVU9LM25UcWtCQmUzVyttZHVMWnAyYWhMZjNjdW82RHpmTG1PVW1GeEp4Q0IzWGh3Y2NwWjRmSjJXc0x0R01icGF3QWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTMyOTA1MTczOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjk2NzYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkFYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGQVguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZeFpiN3c4MXY4RkVvWk43WjRla0Q1R3htM3lSN2FKZGVPMU1TT0trL0dBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDQ0MTMyNzIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY5NTA2NTQ5M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
