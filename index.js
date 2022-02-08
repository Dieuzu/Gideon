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
// TEST -----------------------
let t = 1.5; //

let x = 30; //
let y = 10; //
let z = 50; //

let a = 4; //
let b = 2; // 

let s = 6; //
let z = 1; //

let l = 50; //

let PM = 20;

//Test -------------------------
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

// ----------------TEST TEST ----------------------
function FinalCostForModel(profitMargin) {     //Total Cost per model (profitMargin)
  var machineCost = MachineCost(t);
  var matCost = MaterialCost(s, z)
  var PPCost =  PostProcessingCost(l)
  var totalCost = machineCost + matCost + ( PPCost * (1+ (profitMargin/100)));
  return totalCost;
}

///=============================
function MachineCost(timeMins) {     //Machine cost (FIND OUT WHERE TIME COMES FROM)
  var costPerMin = costPerMin (x ,y ,z ); // check this and get from here 
  var machineCost = timeMins * costPerMin;
  return machineCost;
}

function CostPerMin(depPerMin, costPerElect, powerConsump) {     //Cost per min (comment properly monkey)
  var costPerMin = depPerMin + ((costPerElect * powerConsump)/60);
  return costPerMin;
}
///=============================


function MaterialCost(costMatPerGram, estimatedMass) {     //Machine cost (FIND OUT WHERE TIME COMES FROM)
  var materialCost = costMatPerGram * estimatedMass;
  return materialCost;
}

///=============================

function PostProcessingCost(labourCostPerHour) {     //ppcost cost 
  var ppTimeInMins = PostProcessingTime(a, b) ;
  var PPCost = ppTimeInMins * (labourCostPerHour/60);
  return PPCost;
}

function PostProcessingTime(supportMatPrintTimeInMins, massOfSupportMatInGrams) {     //pptime IN MIN

  /* 2.1646 ??
     0.1403 ???
     -0.404 ??
  */
  var PPTime = 2.1646 + (0.1403 * supportMatPrintTimeInMins)+ (-0.404 * massOfSupportMatInGrams);
  return PPTime;
}
// ----------------TEST TEST ----------------------
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

  //-------------------------------------------- MONKEY TEST

  if (command === "SDGP") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    var x = FinalCostForModel(PM);
    const km = await message.channel.send("the 3d Print costs : " + x + " LKR");
  }
  //--------------------------------------------

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