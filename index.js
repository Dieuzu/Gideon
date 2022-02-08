require('dotenv').config();
//------------------------------------------------------ All Modules!
//commands folder
var killc = require('./Commands/kill.js');       //
var adminc = require('./Commands/admin.js');     //
var hm = require('./Commands/helpme.js');        //
var ver = require('./Commands/version.js');      //
var bs = require('./Commands/activity.js');      //
var rp = require('./Commands/roleplay.js');      //
var rc = require('./Commands/rolecmds.js');      //
var crp = require('./Commands/customRPs.js');    //
var game = require('./Commands/games.js');       //
var gdm = require('./Commands/dm.js');           //
var tcmd = require('./Commands/taskCmd.js');     //

//boot folder
var dmc = require('./Boot/dmchat.js');           //
var act = require('./Boot/bootactivity.js');     //
var greet = require('./Boot/greetings.js');      //
var rpcl = require('./Boot/cmdless.js');         //
var rr = require('./Boot/reactionroles.js');     //
var sc = require('./Boot/chatter.js');           //
var wcum = require('./Boot/welcomeMsg.js');      //
var gc = require('./Boot/guildCount.js');        //
var rt = require('./Boot/reactTask.js');         //

//Test Space
var testS = require('./test.js');                //

//------------------------------------------------------ Constants
const { ReactionRole } = require("reaction-role");
const Discord = require("discord.js");
const client =  new ReactionRole();
const version = '3.0.1';
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
const { botStatus } = require('./Commands/activity.js');
const { dmChats } = require('./Boot/dmchat.js');
const { Gcunt } = require('./Boot/guildCount.js');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hi There.... Want to Contact the developers ? DM us on Discord (𝙎𝙥𝙚𝙚𝙙𝙮#2942 or кιzυяαѕg#6612)');
});
server.listen(3000);