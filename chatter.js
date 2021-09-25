exports.spamChatter = async function (message, console, c, speedy, kizura) {
    //
    if (message.author.id == speedy) {  // Base for Blah Blah Code 
      c++;
      console.log('# Drama talk:', c)
      if (c === 3) {
        var dramanum = Math.floor(Math.random() * 10) + 1;
        c=0;
        console.log('# random roll: ', dramanum)
        if (dramanum === 3 || dramanum === 5 || dramanum === 7 || dramanum === 9) {
          message.channel.send(`There it goes again!`, {
            embed: {
              color: 16758784, 
              image: {
                url: "https://media.giphy.com/media/3o6UB2MSoh7z6Gw3fO/giphy.gif"
              }
            }
          });
        }
      }
    }
    return c;
    
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
  
};