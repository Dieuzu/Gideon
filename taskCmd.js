exports.taskCmd = async function (command, message, console, args, Discord, taskLog) {
    //
    if (command === "task") {
        message.delete().catch(O_o=>{});
        let task = args.join(" ");
  
        embed = new Discord.MessageEmbed()
        embed.setColor('RANDOM')
        embed.setTitle(`Task has been added!`)
        embed.setDescription(`> ${task}`)
  
        const TaskMsg = await message.channel.send(embed);
        taskLog[TaskMsg.id] = embed;
        setTimeout(function() {
            TaskMsg.react('✋').then(() => {});
            TaskMsg.react('✅').then(() => {});
        }, 1000)
      }

};