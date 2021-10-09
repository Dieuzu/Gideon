require('dotenv').config();
//------------------------------------------------------ All Modules!
var killc = require('./kill.js');       //
var adminc = require('./admin.js');     //
var act = require('./bootactivity.js'); //
var greet = require('./greetings.js');  //
var rpcl = require('./cmdless.js');     //
var hm = require('./helpme.js');        //
var ver = require('./version.js');      //
var bs = require('./activity.js');      //
var rp = require('./roleplay.js');      //
var dmc = require('./dmchat.js');       //
var rc = require('./rolecmds.js');      //
var rr = require('./reactionroles.js'); //
var sc = require('./chatter.js');       //
var crp = require('./customRPs.js');    //
var game = require('./games.js');       //
var wcum = require('./welcomeMsg.js');  //
var gc = require('./guildCount.js');    //
var gdm = require('./dm.js');           //
var rt = require('./reactTask.js');       //
var tcmd = require('./taskCmd.js');       //
var testS = require('./test.js');       //


//------------------------------------------------------ Constants
const { ReactionRole } = require("reaction-role");
const Discord = require("discord.js");
const client =  new ReactionRole();
const version = '3.0.0';
const readline = require('readline');
//------------------------------------------------------ People Constants
const creator = '𝙎𝙥𝙚𝙚𝙙𝙮#2942 & кιzυяαѕg#6612'
const bot = '806178893597376522'
const speedy = '169685782494314496';
const kizura ='474010348899532811';
const immune = '169685782494314496'
const krizzi = '389172252786163727';
const draj = '450508419544252422';
//------------------------------------------------------ Initializing Global Variables
let guildcount = 0;
let members = 0;
let activity = []  ;                  // Initialize activity here, add content after client ready.
let c = 0 ;                           // part of the "there it goes again code"
let DMActive = new Array();
let taskLog = [], taskSign = [], taskComp = [];
//------------------------------------------------------
act.bootActives(client, console, guildcount, members, activity); //bootactivity.js

gc.Gcunt(client, console, guildcount, members, activity);

rr.reactionRole(client);

wcum.Welcum(client, console);

rt.reactTask(client, taskLog, taskSign, taskComp);
//------------------------------------------------------ Functions
function random(x) {
  return Math.floor(Math.random() * x);
}

function supress(s) {
  setTimeout(function(){
    s.suppressEmbeds(); 
    console.log(`# I have removed embeds from a Msg!`);
  }, 180000);
}
//------------------------------------------------------ Messages
client.on("message", async message => {  
  //--------------------------------- No prefix commands below

  //c = sc.spamChatter(message, console, c, speedy, kizura);
  
  //===================Dont Mess=====================  
  if (message.author.bot) return;
  let msg = message.content.toLowerCase()
  //===================Dont Mess===================== 

  dmc.dmChats(message, process, readline, DMActive);

  greet.greetmeh(message, msg, speedy, console, kizura , supress, random); // greeting.js

  rpcl.cmdls(message, msg, speedy, console, kizura , supress); 

  //--------------------------------- No prefix commands below
  if (!message.content.startsWith(process.env.PREFIX)) return; // Check for prefix
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  //================== Dont Mess above ============== 

  gdm.gidDM(command, message, args, client, speedy, kizura);

  hm.helpMe(command, message, args, speedy); 

  rc.roleCMDs(command, message, console); // role commands 
  
  ver.version(command, message, speedy, version, creator); // version command 

  bs.botStatus (command, message, args, client, console, speedy, kizura); //bot status commands

  rp.rolePlay (command, message, console, random, supress, speedy, kizura, bot); // roleplay // chck this bug conflict with activity.js

  crp.cusRP(command, message, args, console, supress, speedy, kizura);

  game.miniGames (command, args, message, console, speedy, kizura);

  tcmd.taskCmd(command, message, console, args, Discord, taskLog);
  
  killc.kill(command, args, message, speedy, console);
  
  adminc.admin(command, args, message, speedy, kizura, console);

  testS.testSpace();

});
// Dont Mess Below
client.init();
// Below to keep it online ! ================ DONT MESS ! ================
const http = require('http');
const { botStatus } = require('./activity.js');
const { dmChats } = require('./dmchat.js');
const { Gcunt } = require('./guildCount.js');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hi There.... Want to Contact the developers ? DM us on Discord (𝙎𝙥𝙚𝙚𝙙𝙮#2942 or кιzυяαѕg#6612)');
});
server.listen(3000);