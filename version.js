exports.version = async function (command, message, speedy, version, creator) {
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
            "embed": {
                "title": "***Changelog***", 
                "description": `𝙂𝙞𝙙𝙚𝙤𝙣 (𝙄𝙄𝙏-𝟮𝟭) \nVersion : ${version} \nCreated by : ${creator} \n Special Thanks to : Krizzi#4234 and Stonks#4423`, 
                "color": 16758784,"timestamp": message.createdAt, 
                "image": {
                    "url": "https://cdn.discordapp.com/attachments/832805651309789194/833148954518356048/Gideon.png" // <===image Link here
                },
                "fields": [
                    {"name": "Whats New (22/4/2021)",       
                    "value": "- Added 2 New outcomes for !kill Command!"
                        +" \n- added oof dude code."
                        +" \n- Updated allgood Command to now show a random all good image."
                        +" \n- Modified greetings code."
                        +" \n- Modified DM Gideon [Experimental]"
                        +" \n- Removed guild member tag from greetings." 
                        +" \n- Removed Moderator role from !kick command."},
                    
                    {"name": "Version 2.0.3 (18/4/2021)",       
                    "value": "- Added Embed Suppress Timer to Version command."
                        +" \n- Added embed suppress timer to all gifs."
                        +" \n- Added Auto Delete msg to some RP commands." 
                        +" \n- Added DM Gideon [Experimental]"},
                    
                    {"name": "Version 2.0.2 (18/4/2021)",       
                    "value": "- Added embed suppress timer to greetings." 
                        +" \n- Added !kick command for roles with permission." 
                        +" \n- Updated Version command to show changelog." 
                        +" \n- Updated greetings to display random gif." 
                        +" \n- Updated all RP commands." 
                        +" \n- Updated !helpme command." 
                        +" \n- Updated !ping command."
                        +" \n- Fixed a bug that causes bot to crash when kicked from guild."},
                ]
            }
        }).then(msg => msg.delete({timeout: 180000})); // Set to 3 mins
    }
};