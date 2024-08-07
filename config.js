const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348023675175";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_17_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyLFxuICAgICAgICA1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM1LFxuICAgICAgICA1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc3LFxuICAgICAgICA3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMixcbiAgICAgICAgMTkyLFxuICAgICAgICA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDUXcrem0rdVd2b29XOGhKdk90aktBRDVlRTBNcDlDQjgrcXBzSnViVFlVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMjM2NzUxNzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdGODI2NzBGNzk5MTFGOTA0MTMzRDMwOTdEMDczMTE2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzA0MDI2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0M0drb0VLUFQ4bWxaWFdBV3RReEdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhZjI2YmE2LTlkY2ItNDMyNy05NzRkLWYzM2ZjZjQ5NWZmYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICAxMTgsXG4gICAgICAyMjQsXG4gICAgICAxNTAsXG4gICAgICA3MCxcbiAgICAgIDIxMixcbiAgICAgIDI0MCxcbiAgICAgIDM4LFxuICAgICAgMCxcbiAgICAgIDE3OCxcbiAgICAgIDIwMyxcbiAgICAgIDY4LFxuICAgICAgNTcsXG4gICAgICA4NyxcbiAgICAgIDE3MyxcbiAgICAgIDI0OCxcbiAgICAgIDUsXG4gICAgICAyNixcbiAgICAgIDY4LFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDc1LFxuICAgICAgNDMsXG4gICAgICAyMDYsXG4gICAgICAxMzUsXG4gICAgICAyMzYsXG4gICAgICAxMTgsXG4gICAgICAyNDQsXG4gICAgICAyNDUsXG4gICAgICA5LFxuICAgICAgOCxcbiAgICAgIDIzNyxcbiAgICAgIDIyOSxcbiAgICAgIDExOCxcbiAgICAgIDE4NyxcbiAgICAgIDIzNixcbiAgICAgIDE5MSxcbiAgICAgIDE2MSxcbiAgICAgIDMyLFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlLUFZaM0NXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDIzNjc1MTc1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXYXZlIG1lZGlhXCIsXG4gICAgXCJsaWRcIjogXCI2MjA2Njc3Mzc1MzkzMDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tPaTNyOENFSUdFenJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid3kxTFhNdDJSdlI4eFpOdWkxdHhSZHBucUtyckIycVNSdy9VaUhhM05HWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwQWpaYlEwcXplRi9LSFBvZ1Z5RCtWNWhvNmdaUW12N2ltUjFzb2txTzdSSUM4ZVpMTnlUT0k4NDlIaUhEaE56UzcrYmtVMXBJZmdOOGJzN1N6WHlDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqZW9zcUJ3ZmZXc1k1MnBORG1FMHNLdEVFd05EMHpLOENtemYrSUM0M0RuWjhaVWhYMGhiRnRscEJTV3dGM0JvWXVhV256Qm5NeG9jeGdCVXlhT1hCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDIzNjc1MTc1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDQwMjYxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
