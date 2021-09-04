require('dotenv').config();
const { ReactionRole } = require("reaction-role");
const client =  new ReactionRole();
const version = '0.0.1';
const readline = require('readline');
//--------------------------------------------------------------
const creator = '𝙎𝙥𝙚𝙚𝙙𝙮#2942 & кιzυяαѕg#6612'
const bot = '806178893597376522'
const speedy = '169685782494314496';
const kizura ='474010348899532811';
const immune = '169685782494314496'
const krizzi = '389172252786163727';
const draj = '450508419544252422';
//-------------------------------------------------------------- /* */

let guildcount = 0;
let members = 0;
/* //Commenting Out Role request code 
const option1 = client.createOption("🇦", "Joined Group A", "Left Group A", ["806190622330454016",]);
const option2 = client.createOption("🇧", "Joined Group B", "Left Group B", ["806190618602504232",]);
const option3 = client.createOption("🇨", "Joined Group C", "Left Group C", ["806190613619671131",]);
const option4 = client.createOption("🇩", "Joined Group D", "Left Group D", ["806190608477585418",]);
const option5 = client.createOption("🇪", "Joined Group E", "Left Group E", ["806190603947212811",]);
const option6 = client.createOption("🇫", "Joined Group F", "Left Group F", ["806190600109686834",]);
const option7 = client.createOption("🇬", "Joined Group G", "Left Group G", ["806190595609329723",]);
const option8 = client.createOption("🇭", "Joined Group H", "Left Group H", ["806190547042566144",]);
const option13 = client.createOption("🇮", "Joined Group I", "Left Group I", ["813102649334824970",]);
const option14 = client.createOption("🇯", "Joined Group J", "Left Group J", ["813102651481784352",]);
const option9 = client.createOption("🇨", "Obtained Computer Science Role!", "Gave up Computer Science Role!", ["807276618971611188",]);
const option10 = client.createOption("🇸", "Obtained Software Engineering Role!", "Gave up Software Engineering Role!", ["807276623598190612",]);
const LIMIT = 160;
const RESTRICTIONS = [];
*/

// action constants
const peez  = ["https://cdn.discordapp.com/attachments/832805651309789194/857570160441294858/zhug2.gif","https://cdn.discordapp.com/attachments/832805651309789194/857570161916903434/Zhug1.gif"]
const kizz  = ["https://cdn.weeb.sh/images/ryEvhTOwW.gif", "https://cdn.weeb.sh/images/B13D2aOwW.gif", "https://cdn.weeb.sh/images/HklBtCvTZ.gif", "https://cdn.weeb.sh/images/B12g3TOPZ.gif", "https://cdn.weeb.sh/images/S1y-4l5Jf.gif", "https://cdn.weeb.sh/images/HJ5khTOP-.gif", "https://cdn.weeb.sh/images/BJMX2TuPb.gif", "https://cdn.weeb.sh/images/Hy-oQl91z.gif", "https://cdn.weeb.sh/images/HJmunTOw-.gif", "https://cdn.weeb.sh/images/BkUJNec1M.gif", "https://cdn.weeb.sh/images/S1-KXsh0b.gif", "https://cdn.weeb.sh/images/H1e7nadP-.gif", "https://cdn.weeb.sh/images/BJLP3a_Pb.gif", "https://cdn.weeb.sh/images/Sk5P2adDb.gif", "https://cdn.weeb.sh/images/ByVQha_w-.gif", "https://cdn.weeb.sh/images/SkQIn6Ovb.gif", "https://cdn.weeb.sh/images/HJce2pdv-.gif", "https://cdn.weeb.sh/images/rJrCj6_w-.gif", "https://cdn.weeb.sh/images/SybPhp_wZ.gif"]
const hugz  = ["https://cdn.weeb.sh/images/r1bAksn0W.gif", "https://cdn.weeb.sh/images/SJfEks3Rb.gif", "https://cdn.weeb.sh/images/B11CDkhqM.gif", "https://cdn.weeb.sh/images/B1wRd_XP-.gif", "https://cdn.weeb.sh/images/BJ0UovdUM.gif", "https://cdn.weeb.sh/images/HkzndOXvZ.gif", "https://cdn.weeb.sh/images/B10Tfknqf.gif", "https://cdn.weeb.sh/images/r1R3_d7v-.gif", "https://cdn.weeb.sh/images/Sy65_OQvZ.gif", "https://cdn.weeb.sh/images/Sk-xxs3C-.gif", "https://cdn.weeb.sh/images/Sk2gmRZZG.gif", "https://cdn.weeb.sh/images/Hk4qu_XvZ.gif", "https://cdn.weeb.sh/images/rkYetOXwW.gif", "https://cdn.weeb.sh/images/rk6PsvOUM.gif", "https://cdn.weeb.sh/images/HkQs_dXPZ.gif", "https://cdn.weeb.sh/images/BJF5_uXvZ.gif", "https://cdn.weeb.sh/images/rko9O_mwW.gif", "https://cdn.weeb.sh/images/rJnKu_XwZ.gif", "https://cdn.weeb.sh/images/BkZngAYtb.gif", "https://cdn.weeb.sh/images/ryg2dd7wW.gif"]
const slapz = ["https://cdn.weeb.sh/images/rkpAXa5bG.gif", "https://cdn.weeb.sh/images/r1VF-lcyz.gif", "https://cdn.weeb.sh/images/BkxEo7ytDb.gif", "https://cdn.weeb.sh/images/Sk9mfCtY-.gif", "https://cdn.weeb.sh/images/B1oCmkFw-.gif", "https://cdn.weeb.sh/images/r1PXzRYtZ.gif", "https://cdn.weeb.sh/images/HkK2mkYPZ.gif", "https://cdn.weeb.sh/images/ryv3myFDZ.gif", "https://cdn.weeb.sh/images/ByTR7kFwW.gif", "https://cdn.weeb.sh/images/HkJ6-e91z.gif", "https://cdn.weeb.sh/images/BJSpWec1M.gif", "https://cdn.weeb.sh/images/By2iXyFw-.gif", "https://cdn.weeb.sh/images/B1-nQyFDb.gif", "https://cdn.weeb.sh/images/HkA6mJFP-.gif", "https://cdn.weeb.sh/images/rkaqm1twZ.gif", "https://cdn.weeb.sh/images/HyV5mJtDb.gif", "https://cdn.weeb.sh/images/ry_RQkYDb.gif", "https://cdn.weeb.sh/images/HkskD56OG.gif", "https://cdn.weeb.sh/images/rJgTQ1tvb.gif", "https://cdn.weeb.sh/images/Byjqm1tDW.gif"]
const hiz  = ["https://cdn.discordapp.com/attachments/805999578687471616/807302005294235718/hello-gif-a-nice-penguin-947098.gif", "https://cdn.discordapp.com/attachments/832805651309789194/832918253709033472/hi.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171089881694268/hi3.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171090926600232/hi1.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171093903638538/hi2.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171278209875968/hi4.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171283155615784/hi5.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171302701203476/hi6.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171539557482496/hi7.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171545887211600/hi9.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171559807189052/hi8.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171748693213215/hi11.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171755874517023/hi12.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171759493808188/hi10.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171963405008976/hi13.gif", "https://cdn.discordapp.com/attachments/832805651309789194/833171963811201054/hi14.gif"]

// Dont mess below
client.on('ready', () => {
  console.log(`# Logged in as ${client.user.tag}!`);
  client.user.setActivity(`Haechan (Smile)`, { type: 'WATCHING', url: "https://open.spotify.com/playlist/6Q4ArkuNzSGI49GX4RlWxd?si=0XKQElCfS5WQ-SqO7ndrgQ" } );
});

client.on("guildCreate", async guild => {
  guildcount++;
  members += guild.memberCount;
  console.log(`# I just Joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", async guild => {
  guildcount--;
  members -= guild.memberCount;
console.log(`# I have been removed from: ${guild.name} (id: ${guild.id})`);
});
/* //Commenting Out Role request code 
client.createMessage(
	"813108090429243393",
	"807271779889446968",
	LIMIT,
	RESTRICTIONS,
	option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option13,
  option14,
);
client.createMessage(
	"807272951702749224",
	"807271779889446968",
	LIMIT,
	RESTRICTIONS,
	option9,
  option10,
);
*/
/* //commenting out welcome msg !!
client.on('guildMemberAdd', (guildMember) => {
  guildMember.roles.add(guildMember.guild.roles.cache.find(r => r.name === "IIT-2021-Student")).catch(console.error);
  guildMember.send(`Hi ${guildMember}! Welcome IIT 2021 Batch (CS & SE) Discord! Please React in <#807271779889446968> for your Group and Feel free to introduce yourself in <#805731485726015538> :))`);
});
*/

//Functions :
function random(x) {return Math.floor(Math.random() * x);}
function supress(s) {setTimeout(function(){s.suppressEmbeds(); console.log(`# I have removed embeds from a Msg!`);}, 180000);}

let c = 0 // part of the "there it goes again code"

client.on("message", async message => {  
  // No prefix commands below
  /*if (message.author.id == speedy) {  // Base for Blah Blah Code 
    c++;
    console.log('# Drama talk:', c)
    if (c === 3) {var dramanum = Math.floor(Math.random() * 10) + 1;c=0;console.log('# random roll:', dramanum)
        if (dramanum === 3 || dramanum === 5 || dramanum === 7 || dramanum === 9) {message.channel.send(`There it goes again!`, {embed: {color: 16758784, image: {url: "https://media.giphy.com/media/3o6UB2MSoh7z6Gw3fO/giphy.gif"}}});}
    }
  }*/
  
  /* // Kizura Trigger fun shyts 
  if (message.author.id == kizura) {  // Ooof Dude
    c++;
    console.log('# Gambare Gambare Senpai:', c)
    if (c === 50) {var dramanum = Math.floor(Math.random() * 10) + 1;c=0;console.log('# random roll:', dramanum)
        //if (dramanum === 6) {const msg = await  message.channel.send(`https://www.youtube.com/watch?v=nss_Mt_Afn8`); supress(msg)}
        if (dramanum === 6) {const msg = await  message.channel.send(`https://cdn.discordapp.com/attachments/845578548747173943/856727518030856193/24254869210_477214d8ab_b.jpg`); supress(msg)}
    }
  }
  */
  
  //===================================================================================
  if (message.author.bot) return;
  let msg = message.content.toLowerCase()
  //===================================================================================
  if (message.channel.type === 'dm'){  // Console log DM code!
    console.log(`# ${message.author.username} DMed: ${message.content}`);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(`# Reply to ${message.author.username}: `, (answer) => {
        message.author.send(`${answer}`);
        rl.close();
    });
  }

  // Greetings!
  if ((msg.startsWith("hi ") || msg.startsWith("hello ") || msg.startsWith("hey ")) && (msg.includes("everyone") || msg.includes("all") || msg.includes("people") || msg.includes("there"))) { // THIS SHYT WORKS
    if (!message.mentions.members.first()) {
    console.log(`# ${message.author.username} was greeted!`)
    let aut = message.author;
    let aID = message.author.id;
    let aug = message.member.displayName
  
    if (aID == speedy) return message.channel.send(`***Hi ${aut}! It’s good to see you!*** <:jetthi:827226579759005767>`);
    if (aID == kizura) {const msg = await  message.channel.send(`***Sup cool dude ${aug}, always be swagging!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/815978917940428901/849434647203938324/zi.gif"}}}) 
    supress(msg) 
    return};
    const msg = await message.channel.send(`***Hello there ${message.member.displayName}!*** <:jetthi:827226579759005767>`, {embed: {color: 16758784, image: {url: hiz[random(hiz.length)]}}}) 
    supress(msg)};
  }
  if (message.content.toLowerCase().startsWith("morning ") || message.content.toLowerCase().startsWith("good morning ") || message.content.toLowerCase().startsWith("ohayo ")) {
    let aut = message.author;
    let aID = message.author.id;
    if (aID == speedy) return message.channel.send(`***Good morning hun! It’s good to see you!*** <:jettheart:832945041920098304>`);
    if(!message.mentions.members.first()) return message.channel.send(`***Good morning there, ${message.member.displayName}!*** <:jetthi:827226579759005767>`)
  }
  if ((msg.startsWith("stfu") || msg.startsWith("shut up") || msg.startsWith("Fuck off")) && (msg.includes("gideon"))) {
    let aut = message.author;
    let aID = message.author.id;
    if (aID == kizura) return message.channel.send(`i.... <:sageon:836906525376118804>`);
    if (aID == speedy) return message.channel.send(`no u... <:sagelol:836906524706209803>`);
    if(!message.mentions.members.first()) return message.channel.send(`***Thas not very nice, ${message.member.displayName}!*** <:jettwtf:827226580114866226>`)
  }

  // RP Expressions
  if (msg.startsWith("(smile)")) { // look into this later
    message.delete().catch(O_o=>{}); 
    console.log(`# ${message.author.username} is smiling!`)
    if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} is smiling!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/870317910671904786/882637366358052944/unknown-28.png"}}})
    supress(msg)}
  }
  if (msg.startsWith("allgood")) { // look into this later
    message.delete().catch(O_o=>{}); 
    //console.log(`# ${message.author.username} thinks this is also fine`)
    if (!message.mentions.members.first()) 
    var randomimg = Math.floor(Math.random() * 2) + 1;
    console.log(randomimg)
    if (randomimg === 1) {   // Rand Option 1
       const msg = await message.channel.send(`***${message.member.displayName} Thinks This is Also Fine***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/807301958682542080/valorant-spray-this-is-also-fine.png"}}})
       supress(msg)
       console.log(`# ${message.author.username} thinks this is also fine [Phoenix]`)
    }
    if (randomimg === 2) {   // Rand Option 2
       const msg = await message.channel.send(`***${message.member.displayName} Thinks This is Also Also Fine***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/832805651309789194/839847402114777128/ThisIsAlsoFine-1024x813.png"}}})
       supress(msg)
       console.log(`# ${message.author.username} thinks this is also also fine [Raze]`)
    }
  }
  if (msg.startsWith("jetth")) { // look into this later
    message.delete().catch(O_o=>{}); 
    console.log(`# ${message.author.username} is sending you love!`)
    if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} is sending you love!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/815201328468066324/valorant-spray-3.png"}}})
    supress(msg)}
  }
  
  if (msg.startsWith("!salt")) { // look into this later
    message.delete().catch(O_o=>{}); 
    console.log(`# ${message.author.username} can smell some salt in the air!`)
    if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} can smell some salt in the air!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/815206321972052058/Salt_Shaker.gif"}}})
    supress(msg)}
  }
  if (msg.startsWith("rebibe")) { // look into this later
    message.delete().catch(O_o=>{}); 
    console.log(`# ${message.author.username} is wondering how to revive somone!`)
    if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} is wondering how to revive somone!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/817375938144239627/rebibe.png"}}}) 
    supress(msg)}
  }
  if (msg.startsWith("mbar")) { // look into this later
    message.delete().catch(O_o=>{}); 
    console.log(`# ${message.author.username} thinks this is Embarrassing`)
    if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} thinks this is Embarrassing***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/817375935590170644/embar.png"}}})
    supress(msg)}
  }
  if (msg.startsWith("meyes")) { // look into this later
    message.delete().catch(O_o=>{}); 
    console.log(`# ${message.author.username} just burnt their eyes!`)
    if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} just burnt their eyes!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/817376390629818438/meyes.png"}}})
    supress(msg)}
  }
  if (msg.startsWith("jettq")) { // look into this later
    message.delete().catch(O_o=>{}); 
    console.log(`# ${message.author.username} has a questioning look!`)
    if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} has a questioning look!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/815213487928115210/Jett_Q.png"}}})
    supress(msg)}
  }

  //===================================================================================
  if (!message.content.startsWith(process.env.PREFIX)) return; // Check for prefix
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  //===================================================================================
  if (command === "helpme") { // Help Me Command
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.author.send(`Heya ${message.author}!`, {
      "embed": {"title": "List of Commands", "description": "List of Commands to use the '𝙂𝙞𝙙𝙚𝙤𝙣 (𝙄𝙄𝙏-𝟮𝟭)' Bot! Enjoy!", "color": 16758784,"timestamp": message.createdAt, "image": {
          "url": "https://cdn.discordapp.com/attachments/832805651309789194/883630598349029406/jrm.png" // <===image Link here
        },
        "fields": [
          {"name": "!helpme",       "value": "You already know how this works!"},
          {"name": "!version",      "value": "Find out what Version i am!"},
          {"name": "!hug",          "value": "hug someone and show them they matter"},
          {"name": "!slap",         "value": "Slap somone today!"},
          {"name": "!kiss",         "value": "this should be obvious right ?"},
          {"name": "!kill",         "value": "WATCH THIS"},
          {"name": "!ping",         "value": "Pong? Wtf"},
          {"name": "!getid",        "value": "!getid @somone to get their id"},
          {"name": "!chill",        "value": "Gives the [😊Chill] Role"},
          {"name": "!gamer",        "value": "Gives the [🎮Gamer] Role"},
          {"name": "!valorant",     "value": "Gives the [𝗩𝗔𝗟𝗢𝗥𝗔𝗡𝗧] Role"},
          {"name": "!league",       "value": "Gives the [𝗟𝗢𝗟] Role"},
          {"name": "!osu",          "value": "Gives the [𝗢𝗦𝗨] Role"},
          {"name": "!paimon",       "value": "Gives the [𝗚𝗲𝗻𝘀𝗵𝗶𝗻 𝗜𝗺𝗽𝗮𝗰𝘁] Role"},
          {"name": "!overwatch",    "value": "Gives the [𝗢𝘃𝗲𝗿𝘄𝗮𝘁𝗰𝗵] Role"},
          {"name": "!apex",         "value": "Gives the [𝗔𝗽𝗲𝘅 𝗟𝗲𝗴𝗲𝗻𝗱𝘀] Role"},
          {"name": "!spellbreak",   "value": "Gives the [𝗦𝗽𝗲𝗹𝗹𝗯𝗿𝗲𝗮𝗸] Role"},
          {"name": "!minecraft",    "value": "Gives the [𝗠𝗶𝗻𝗲𝗰𝗿𝗮𝗳𝘁] Role"},
          {"name": "!on",           "value": "oh no , no no no no"},
          {"name": "!salt",         "value": "Salty ?"},
        ]
      } 
    });
    if (message.author.id == speedy)  
      message.author.send(`You are Special ${message.author}! So here u go..`, {
        "embed": {"title": "A List of Commands Exclusive To You", "color": 16758784, "timestamp": message.createdAt, "image": {
            "url": "https://cdn.discordapp.com/attachments/832805651309789194/832833729072332870/embar.png" // <===image Link here
          },
          "fields": [
            {"name": "!say",        "value": "Make the bot say stuff!"},
            {"name": "!status",     "value": "Online/Idle/Invisible/Dnd"},
            {"name": "!stream",     "value": "Sets bot on streamer mode"},
            {"name": "!playing",    "value": "Sets bot on playing mode"},
            {"name": "!watching",   "value": "Sets bot on watching mode"},
            {"name": "!listening",  "value": "Sets bot on listening mode"},
            {"name": "!wipe",       "value": "mass deletes msgs (ex. !wipe 20)"},
            {"name": "!harem",      "value": "Oh boy! you are in trouble!"},
          ]
        }
      });
  }
  // ROLE COMMANDS :
  /* Example of Role request commands
  if (command === "gamer") { // 🎮Gamer role command
    message.delete().catch(O_o=>{});
    let role = message.guild.roles.cache.find(r => r.name == "🎮Gamer")
    if(!role) return message.channel.send("Role '🎮Gamer' does not exist")
    let hasRole = message.member.roles.cache.find(r => r.name == "🎮Gamer")
    if (hasRole) {console.log(`# Removed ${role.name} Role from ${message.author.username}`); message.member.roles.remove(role); message.author.send(`Hi ${message.author}! you just left the 🎮GAMING Section`);}
    else {console.log(`# Gave ${role.name} Role to ${message.author.username}`); message.member.roles.add(role); message.author.send(`Hi ${message.author}! you just unlocked the 🎮GAMING Section`);}
  }
  if (command === "chill") { //😊Chill role command
    message.delete().catch(O_o=>{});
    let role = message.guild.roles.cache.find(r => r.name == "😊Chill")
    if(!role) return message.channel.send("Role '😊Chill' does not exist")
    let hasRole = message.member.roles.cache.find(r => r.name == "😊Chill")
    if (hasRole) {console.log(`# Removed ${role.name} Role from ${message.author.username}`); message.member.roles.remove(role); message.author.send(`Hi ${message.author}! you just left the 😊Chill Section`);}
    else {console.log(`# Gave ${role.name} Role to ${message.author.username}`); message.member.roles.add(role); message.author.send(`Hi ${message.author}! you just unlocked the 😊Chill Section`);}
  }
  if (command === "valorant") { //Valorant role command
    message.delete().catch(O_o=>{});
    let role = message.guild.roles.cache.find(r => r.name == "VALORANT")
    if(!role) return message.channel.send("Role 'VALORANT' does not exist")
    let hasRole = message.member.roles.cache.find(r => r.name == "VALORANT")
    if (hasRole) {console.log(`# Removed ${role.name} Role from ${message.author.username}`); message.member.roles.remove(role); message.author.send(`Hi ${message.author}! you just removed 𝗩𝗔𝗟𝗢𝗥𝗔𝗡𝗧 role from yourself!`);}
    else {console.log(`# Gave ${role.name} Role to ${message.author.username}`); message.member.roles.add(role); message.author.send(`Hi ${message.author}! you got yourself the 𝗩𝗔𝗟𝗢𝗥𝗔𝗡𝗧 role!`);}
  }
  */

  // version command 
  if(command === "version") {
    const vm = await message.channel.send("***Getting Version info...***");
    if (message.author.id == speedy) { 
      vm.edit(`${message.author} ***You know which Version im on hun! You did Create me after all...***`);
      setTimeout(function(){
        vm.edit(`<:jettkiss:832945040586047488>`);
        setTimeout(function(){
          vm.edit(`***Anyways im on Version: ${version}!***`);
        }, 4000);
      }, 4000);
    };
    if (message.author.id !== speedy) { 
      vm.edit(`*** im on Version: ${version}!*** <:jettheart:832945041920098304>`);
    }
    const msg = await message.channel.send(``, {
        "embed": {"title": "***Changelog***", "description": `𝙂𝙞𝙙𝙚𝙤𝙣 (𝙄𝙄𝙏-𝟮𝟭) \nVersion : ${version} \nCreated by : ${creator}`, "color": 16758784,"timestamp": message.createdAt, "image": {
            "url": "https://cdn.discordapp.com/attachments/832805651309789194/833148954518356048/Gideon.png" // <===image Link here
          },
          "fields": [
            {"name": "Whats New (22/4/2021)",       "value": "- Added 2 New outcomes for !kill Command! \n- added oof dude code.\n- Updated allgood Command to now show a random all good image. \n- Modified greetings code. \n- Modified DM Gideon [Experimental]\n- Removed guild member tag from greetings. \n- Removed Moderator role from !kick command."},
            {"name": "Version 2.0.3 (18/4/2021)",       "value": "- Added Embed Suppress Timer to Version command. \n- Added embed suppress timer to all gifs. \n- Added Auto Delete msg to some RP commands. \n- Added DM Gideon [Experimental]"},
            {"name": "Version 2.0.2 (18/4/2021)",       "value": "- Added embed suppress timer to greetings. \n- Added !kick command for roles with permission. \n- Updated Version command to show changelog. \n- Updated greetings to display random gif. \n- Updated all RP commands. \n- Updated !helpme command. \n- Updated !ping command. \n- Fixed a bug that causes bot to crash when kicked from guild."},
          ]
        }
    }).then(msg => msg.delete({timeout: 180000})); // Set to 3 mins
  }

  //bot status commands
  if (command === "status") { // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    if (message.author.id == speedy) {client.user.setStatus(sayMessage) 
      console.log(`${message.author.username} changed Status to "${sayMessage}"`);
    }
    else {message.channel.send(`You do not have permission to do this ${message.author}!`)}
  }
  if (command === "stream") { // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    if (message.author.id == speedy) {client.user.setActivity(sayMessage, { type: 'STREAMING', url: "https://www.twitch.tv/softkhor" });
      console.log(`# ${message.author.username} started streaming Namiko's Twitch "${sayMessage}"`);
    }
    else {message.channel.send(`You do not have permission to do this ${message.author}!`)}
  } 
  if (command === "playing") { // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    if (message.author.id == speedy) {client.user.setActivity(sayMessage)
      console.log(`# ${message.author.username} made the bot start "Playing ${sayMessage}"`);
    }
    else {message.channel.send(`You do not have permission to do this ${message.author}!`)}
  }
  if (command === "watching") { // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    if (message.author.id == speedy) {client.user.setActivity(sayMessage, { type: 'WATCHING', url: "https://www.twitch.tv/looryina" });
      console.log(`# ${message.author.username} made the bot start "Watching ${sayMessage}"`);
    }
    else {message.channel.send(`You do not have permission to do this ${message.author}!`)}
  } 
  if (command === "listening") { // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    if (message.author.id == speedy) {client.user.setActivity(sayMessage, { type: 'LISTENING', url: "https://www.twitch.tv/looryina" });
      console.log(`# ${message.author.username} made the bot start "Listening to ${sayMessage}"`);
    }
    else {message.channel.send(`You do not have permission to do this ${message.author}!`)}
  }
  // Role Play commands
  // TEST SPACE BELOW

  // TEST SPACE ABOVE  
  if (command === "hug") {
    message.delete().catch(O_o=>{});
    let aut = message.author;
    let aID = message.author.id;
    if(!message.mentions.members.first()) {const msg = await  message.channel.send(`***Awwwwwww*** ${client.user} ***hugged*** ${aut}***!***`, {embed: {color: 1671168, image: {url: "https://cdn.weeb.sh/images/H1ui__XDW.gif"}}});
    supress(msg) 
    return};
    let tar = message.mentions.members.first();
    let tID = message.mentions.members.first().user.id;
    if (aID == speedy && tID == kizura) {const msg = await  message.channel.send(`${aut} ***pulled his noob bestie*** ${tar} ***into a loving hug!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/832805651309789194/857570164178550784/original.gif"}}})
    supress(msg) 
    return};
    if (aID == kizura && tID == speedy) {const msg = await  message.channel.send(`${aut} ***is murdering her bestie*** ${tar} ***with love!***`, {embed: {color: 16758784, image: {url: peez[random(peez.length)]}}})
    supress(msg) 
    return};
    const msg = await  message.channel.send(`${aut} ***grabbed and hugged*** ${tar}`, {embed: {color: 23039, image: {url: hugz[random(hugz.length)]}}});
    supress(msg);
    return
  }
  if (command === "slap") {
    message.delete().catch(O_o=>{});
    let aut = message.author;
    let aID = message.author.id;
    if(!message.mentions.members.first()) {const msg = await  message.channel.send(`${client.user} ***slapped*** ${aut}***!***`, {embed: {color: 16563740, image: {url: slapz[random(slapz.length)]}}})
    supress(msg) 
    return};
    let tar = message.mentions.members.first();
    let tID = message.mentions.members.first().user.id;
    if (tID == speedy) {const msg = await  message.channel.send(`***You cannot slap the Server Owner!*** ${tar} ***slapped*** ${aut} ***to Wakanda!***`, {embed: {color: 16758784, image: {url: "https://cdn.weeb.sh/images/H16aQJFvb.gif"}}})
    supress(msg) 
    return};
    if (tID == bot) {const msg = await  message.channel.send(`${tar} ***got a little slap and returned it 10 times more stronger to*** ${aut}!`, {embed: {color: 16758784, image: {url: "https://cdn.weeb.sh/images/HJKiX1tPW.gif"}}})
    supress(msg) 
    return};
    if (aID == speedy) {const msg = await  message.channel.send(`${aut} ***slapped*** ${tar} ***and everyone else in his path!***`, {embed: {color: 16758784, image: {url: "https://i.gifer.com/2958.gif"}}})
    supress(msg) 
    return};
    const msg = await  message.channel.send(`${aut} ***slapped the shit out of*** ${tar}`, {embed: {color: 16563740, image: {url: slapz[random(slapz.length)]}}})
    supress(msg);
    return
  } 
  if (command === "kiss") {
    message.delete().catch(O_o=>{});
    let aut = message.author;
    //let aID = message.author.id;
    if(!message.mentions.members.first()) {const msg = await  message.channel.send(`***Awwwwwww*** ${client.user} ***kissed*** ${aut}***!***`, {embed: {color: 1671168, image: {url: "https://cdn.weeb.sh/images/SydfnauPb.gif"}}})
    supress(msg) 
    return};
    let tar = message.mentions.members.first();
    let tID = message.mentions.members.first().user.id;
    if (tID == speedy) {const msg = await  message.channel.send(`${tar} ***shouted : "Oii dont try to kiss me!" and smashed***  ${aut} ***into the wall!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/832805651309789194/832847010591277098/speedslap.gif"}}})
    supress(msg) 
    return};
    if (tID == kizura) {const msg = await  message.channel.send(`${tar} ***grins smugly and says "pfft...better luck next time*** ${aut}***!***`, {embed: {color: 1671168, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/822825059940696094/tenor.gif"}}})
    supress(msg) 
    return};
    const msg = await  message.channel.send(`${aut} ***kissed*** ${tar}`, {embed: {color: 23039, image: {url: kizz[random(kizz.length)]}}});
    supress(msg) 
    return
  }
  if (command === "harem") { // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    if (message.author.id == speedy) {const msg = await  message.channel.send(`${message.author} ***is thinking of his harem!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/460196950709370900/740547376795615314/b56213cf6dd48a46c2aa3e935b1ca6631b704f6b_hq.gif"}}})
    supress(msg) 
    return};
  }
  if (command === "lag") { // Code complete
      const sayMessage = args.join(" ");
      message.delete().catch(O_o => { });
      if (message.author.id == speedy) return message.channel.send(``, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/816561861549883392/unknown.png"}}}).then(msg => msg.delete({timeout: 180000})); // Set 3 mins
  }
  if (command === "welcome") {  // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });

    let member = message.mentions.members.first();
    if (!member) {const msg = await  message.channel.send(`***Welcome!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/808010592312098887/fg.gif"}}})
    supress(msg) 
    return};
    const msg = await  message.channel.send(`${message.author} ***Welcomed*** ${sayMessage}***!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/808010592312098887/fg.gif"}}})
    supress(msg) 
    return;
  }
  if (command === "ded") { // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    if (message.author.id == speedy) {const msg = await  message.channel.send(`${message.author} ***thinks God is dead...***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/822814413660225566/ShrillMedicalGnu-size_restricted.gif"}}})
    supress(msg) 
    return};
  }
  if (command === "on") { // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    console.log(`# ${message.author.username} singing Oh No!"`);
    const msg = await message.channel.send(`${message.author} is singing along to the song:  https://www.youtube.com/watch?v=fXLicO0CRvk`,)
    supress(msg)
  }
  if (command === "hh") { // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    console.log(`# ${message.author.username} singing Hamood Habibi Hamood!"`);
    let aut = message.author;
    let aID = message.author.id;
    const msg = await message.channel.send(`${message.author} is singing along to the song:  https://www.youtube.com/watch?v=lIuDzlQwluY`,)
    supress(msg)
  }
  if (command === "roll") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    if (message.author.id == speedy) { 
        return message.reply("You rolled a 69");
    }else if (message.author.id == kizura){
        return message.reply("You rolled a 69");
    }else {
    var roll = Math.floor(Math.random() * 100) + 1;
    message.reply("You rolled a " + roll);
    }
  }
  // Watch this command
  if (command === "kill") {  // Code complete
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => { });
    const km = await message.channel.send("***Oh No!***");
  
    if (message.author.id == speedy) { 
          km.edit(`${message.author} ***used Blade Storm!***"`);
          setTimeout(function(){
            km.edit(`${message.author}***: Watch This!***`);
            setTimeout(function(){
              km.edit(`${message.author} ***threw their Daggers with 100% Accuracy at*** ${sayMessage} ***Head!***`);
              setTimeout(function(){
                km.edit(`<:jettthrow1:827019514469941308><:jettthrow2:827019514704429056>`);
                setTimeout(function(){
                  km.edit(`<:jetths:827219645282779146>`);
                  setTimeout(function(){
                    km.edit(`${sayMessage} ***is Dead!*** <a:yls:806933927444086834>, ${message.author} ***:There you are you lil Shit!*** <:jettlol:827219645558816848>`);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
      return
    };
  
    if (message.mentions.members.first().user.id == speedy) return setTimeout(function(){
          km.edit(`${message.author} ***used Blade Storm!***`);
          setTimeout(function(){
            km.edit(`${message.author}***: Watch This!***`);
            setTimeout(function(){
              km.edit(`${message.author} ***threw their Daggers with 0% Accuracy at*** ${sayMessage}`);
              setTimeout(function(){
                km.edit(`<:jettthrow1:827019514469941308><:jettthrow2:827019514704429056>`);
                setTimeout(function(){
                  km.edit(`${message.author} ***Missed!***`);
                  setTimeout(function(){
                    km.edit(`<:jetton:827219645995286628>`);
                    setTimeout(function(){
                      km.edit(`${sayMessage} ***also used Blade Storm!***`);
                      setTimeout(function(){
                        km.edit(`${sayMessage}***: Get Out of My Way!***`);
                        setTimeout(function(){
                          km.edit(`${sayMessage} ***threw their Daggers with 100% Accuracy at*** ${message.author} ***head!***`);
                          setTimeout(function(){
                            km.edit(`<:jetths:827219645282779146>`); 
                            setTimeout(function(){
                              km.edit(`${message.author} ***is Dead!*** <a:yls:806933927444086834> ${sayMessage}***: Hah! You should've seen your faces!***<:jettlol:827219645558816848>`);
                            }, 2000);
                          }, 2000);
                        }, 2000);
                      }, 2000);
                    }, 2000);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
    }, 2000);
        
    let member = message.mentions.members.first();
    if (!member)
    return setTimeout(function(){
      km.edit(`<:jettrip:827226579985760306>`); 
      setTimeout(function(){
          km.edit(`${message.author} ***died before they could use Blade Storm!***`);
      }, 2000);
    }, 2000);
    
    var randomimg = Math.floor(Math.random() * 6) + 1;
      console.log(randomimg)
  
    setTimeout(function(){
      km.edit(`${message.author} ***used Blade Storm!***"`);
      setTimeout(function(){
        km.edit(`${message.author}***: Watch This!***`);
        setTimeout(function(){
          if (randomimg === 1) {   // Rand Option 1
            km.edit(`${message.author} ***threw their Daggers with 100% Accuracy at*** ${sayMessage} ***Head!***`);
            setTimeout(function(){
              km.edit(`<:jettthrow1:827019514469941308><:jettthrow2:827019514704429056>`);
              setTimeout(function(){
                km.edit(`<:jetths:827219645282779146>`);
                setTimeout(function(){
                  km.edit(`${sayMessage} ***is Dead!*** <a:yls:806933927444086834>, ${message.author} ***:There you are you lil Shit!*** <:jettlol:827219645558816848>`);
                }, 2000);
              }, 2000);
            }, 2000);
          }
          if (randomimg === 2) {  // Rand Option 2
            km.edit(`${message.author} ***threw their Daggers with High Accuracy at*** ${sayMessage} ***Body!***`);
            setTimeout(function(){
              km.edit(`<:jettthrow1:827019514469941308><:jettthrow2:827019514704429056>`);
              setTimeout(function(){
                km.edit(`<:jettwoah:827228922843889726>`);
                setTimeout(function(){
                  km.edit(`<:jettclutch:827229715202703371>`);
                  setTimeout(function(){
                    km.edit(`${sayMessage} ***is Dead!,*** ${message.author}: ***"Heh. Oh wow, you guys suck."***`);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }
          if (randomimg === 3) {  // Rand Option 3
            km.edit(`${message.author} ***threw their Daggers with Low Accuracy at*** ${sayMessage} ***Body!***`);
            setTimeout(function(){
                km.edit(`<:jettthrow1:827019514469941308><:jettthrow2:827019514704429056>`);
                setTimeout(function(){
                  km.edit(`<:jettcri:827226579930710036>`);
                  setTimeout(function(){
                    km.edit(`${message.author} ***Couldnt kill*** ${sayMessage}!`);
                  }, 2000);
                }, 2000);
            }, 2000);
          }
          if (randomimg === 4) {  // Rand Option 4
            km.edit(`${message.author} ***threw their Daggers with bad aim at*** ${sayMessage}***\'s Feet!***`);
            setTimeout(function(){
              km.edit(`<:jettthrow1:827019514469941308><:jettthrow2:827019514704429056>`);
              setTimeout(function(){
                km.edit(`<:jettwtf:827226580114866226>`);
                setTimeout(function(){
                  km.edit(`${message.author} ***Completely missed! and couldnt kill*** ${sayMessage}!`);
                }, 2000);
              }, 2000);
            }, 2000);
          } 
          if (randomimg === 5) {  // Rand Option 5
            km.edit(`${message.author} ***realised they were playing Sage and not Jett!***`);
            setTimeout(function(){
              km.edit(`<:sageoof:836906525788078090>`);
              setTimeout(function(){
                km.edit(`${message.author} ***Threw Slow Orbs at ${sayMessage} face, and one tapped them with a Vandal!***`);
                setTimeout(function(){
                  km.edit(`<:sagelol:836906524706209803>`);
                  setTimeout(function(){
                    km.edit(`${sayMessage} ***is Dead!,*** ${message.author}: ***"I am not just your healer!"***`);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }
          if (randomimg === 6) {  // Rand Option 6
            km.edit(`${message.author} ***realised they were playing Sage and not Jett!***`);
            setTimeout(function(){
              km.edit(`<:sageoof:836906525788078090>`);
              setTimeout(function(){
                km.edit(`${message.author} ***Tried to heal themself but got knifed by ${sayMessage} who was Playing Viper!***`);
                setTimeout(function(){
                  km.edit(`<:sageon:836906525376118804>`);
                  setTimeout(function(){
                    km.edit(`${message.author} ***is Dead!,*** ${sayMessage}: ***"We're done here!"*** <:vipershrug:836906525602742303>`);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }               
        }, 2000);
      }, 2000);
    }, 2000); 
  }
  // Random stuff i not checked much =========================================================================
  if (command === "getid") {
      const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{});
      let member = message.mentions.members.first();
      if(!member) return message.reply("Please mention a valid member.")
      console.log(sayMessage)
      message.author.send(`\`\`\`${sayMessage}\`\`\``)
  }
  if (command === "ping") {
      const m = await message.channel.send("***Pinging....*** <:jettwoah:827228922843889726>");
      m.edit(`***Pong! Latency is*** ${m.createdTimestamp - message.createdTimestamp}***ms. API Latency is ***${Math.round(client.ws.ping)}***ms*** <:jettheart:832945041920098304>`);
  }
	if (command === "say") { // Add proper roles here dunt be monkey speedy
    if (!message.member.roles.cache.some(r=>["Moderator", "Admin", "𝙑𝙚𝙡𝙤𝙘𝙞𝙩𝙮 𝟲"].includes(r.name)) && message.author.id !== speedy)
			return message.reply("***Sorry, you don't have permissions to use this!***");
		const sayMessage = args.join(" ");
		message.delete().catch(O_o=>{}); 
		message.channel.send(sayMessage);
    console.log(`# ${message.author.username} used the bot to say : ${sayMessage} `);
	}

  if(command === "wipe") { // Add proper roles here dunt be monkey speedy
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    if (!message.member.roles.cache.some(r=>["𝙎𝙃𝙄𝙈𝙋", "𝙎𝙥𝙚𝙚𝙙𝙮", "𝙑𝙚𝙡𝙤𝙘𝙞𝙩𝙮 𝟵", "Administrator", "Moderator", "Twinsies", "i am Krizzi", "KrizziForce", "Krizzi", "Admin"].includes(r.name)) )
      return message.reply("***Sorry, you don't have permissions to use this!***");
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 10000)
      return message.reply("***Please provide a number between 2 and 10000 for the number of messages to delete***");
    const fetched = await message.channel.messages.fetch({limit: deleteCount});
    message.channel.bulkDelete(fetched).catch(error => message.reply(`***Couldn't delete messages because of: ${error}***`));
  }
});

// Dont Mess Below
client.init();
// Below to keep it online ! ================ DONT MESS ! ================
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hi There.... Want to Contact the developers ? DM us on Discord (𝙎𝙥𝙚𝙚𝙙𝙮#2942 or кιzυяαѕg#6612)');
});
server.listen(3000);