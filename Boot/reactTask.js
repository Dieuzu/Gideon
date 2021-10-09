exports.reactTask = async function (client, taskLog, taskSign, taskComp) {
    //
    client.on('messageReactionAdd', async (reaction, user) => {
        if (user.bot) return;
        let message = reaction.message, ej = reaction.emoji;
        if (message.author.id !== client.user.id) return;
        let expectedej = ['✋', '✅'];
        if (!expectedej.includes(ej.name)) return;

        let embed = taskLog[message.id];
        if (ej.name == '✋') {
            if (taskSign[message.id + "" + user.id]) return message.channel.send(`You're already signed up, ${user}!`);
            taskSign[message.id + "" + user.id] = user.id;
            if (!embed.description.includes("Signed up:")) {
            embed.setDescription(`${embed.description}\nSigned up:\n> ${user.username}`)
            }
            else
            {
            if (!embed.description.includes("Completed:")) {
                embed.setDescription(`${embed.description}\n> ${user.username}`);
            }
            else
            {
                let completed = embed.description.split("Completed:")
                embed.setDescription(`${completed[0]}> ${user.username}\nCompleted:${completed[1]}`);
            }
            }
        }

        if (ej.name == '✅') {
            if (!taskSign[message.id + "" + user.id]) return message.channel.send(`You need to sign up first, ${user}!`);
            if (taskComp[message.id + "" + user.id]) return message.channel.send(`You have already completed, ${user}!`);
            taskComp[message.id + "" + user.id] = user.id;
            if (!embed.description.includes("Completed:")) {
            embed.setDescription(`${embed.description}\nCompleted:\n> ${user.username}`)
            }
            else
            {
            embed.setDescription(`${embed.description}\n> ${user.username}`);
            }
        }
        message.edit(embed)
    });

};