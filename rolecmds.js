exports.roleCMDs = async function (command, message, console) {
    // ROLE COMMANDS :
    if (command === "testrole") { // 🎮Gamer role command
      message.delete().catch(O_o=>{});
      let role = message.guild.roles.cache.find(r => r.name == "TESTROLE")
      if(!role) return message.channel.send("Role 'TESTROLE' does not exist")
      let hasRole = message.member.roles.cache.find(r => r.name == "TESTROLE")
      if (hasRole) {console.log(`# Removed ${role.name} Role from ${message.author.username}`); message.member.roles.remove(role); message.author.send(`Hi ${message.author}! you just left the ***TESTROLE*** Section`);}
      else {console.log(`# Gave ${role.name} Role to ${message.author.username}`); message.member.roles.add(role); message.author.send(`Hi ${message.author}! you just unlocked the ***TESTROLE*** Section`);}
    }
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
};