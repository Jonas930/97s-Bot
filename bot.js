const Discord = require("discord.js");
const bot = new Discord.Client();
const Prefix = "!"

bot.on('ready', () => {
  console.log(`Yes, My Master. ${bot.user.tag} is here!`);
  bot.user.setGame("Pokemon Universe");
});

bot.on('guildMemberAdd', member =>{
  member.guild.channels.find('name', 'general').send(member.toString() + ", Welcome to **Pokemon Universe** Discord Server!\:wink:\n\nIn here, you can use...\n\n**!game** -> for the newest version of Pokemon Universe.\n**!fonts** -> for the fonts of Pokemon Universe.\n~~**!demo** -> for a little gameplay of Pokemon Universe.~~\n\nHave A Nice Day ( ͡° ͜ʖ ͡°)");
  member.addRole(member.guild.roles.find('name', 'Trainers'));
});

bot.on('guildMemberRemove', member =>{
  member.guild.channels.find('name', 'work-station').send(member.user.username + " just leave the server...\:thinking:");
});

bot.on('message', msg => {
  if (msg.author.equals(bot.user)) return;
  if (msg.content.toLowerCase().includes('hmm')){
    msg.channel.send('Hmmm?\:thinking:');
  };
  var args = msg.content.split(" ");
  switch (args[0].toLowerCase()) {
    case "lenny":
      msg.channel.send('( ͡° ͜ʖ ͡°)');
      break;
    case "ping":
      msg.channel.send({embed:{
        title:"Nice.",
        description: "Pong!",
        color: 0x975597
      }});
      break;
  };
  if (!msg.content.startsWith(Prefix)) return;
  var args = msg.content.substring(Prefix.length).split(" ");
  switch (args[0].toLowerCase()) {
    case "stream":
      msg.guild.channels.find('name', 'announcements').send('Jonas930 is streaming **Making Pokemon Universe** on Youtube now!\nStream Link: https://www.youtube.com/channel/UCO3-uzqnoSvKxvo9o5FOt8w/live');
      break;
    /**case "demo":
      msg.channel.send({embed:{
        title:'The Demo of "Pokemon Universe -Across Time and Space-" is here.',
        description: "Link: ",
        color: 0x975597
      }});
      break;*/
    case "fonts":
      msg.channel.send({embed:{
        title:'The Fonts that used in "Pokemon Universe -Across Time and Space-" is here.',
        description: "Link: https://drive.google.com/file/d/0B_grJsTvgzCAT20wY0NmZE1YTlk/view",
        color: 0x975597
      }});
      break;
    case "game":
      msg.channel.send({embed:{
        title:`The newest "Pokemon Universe -Across Time and Space-" is "**${process.env.VERSION.toString()}**"`,
        description: `Link: ${process.env.VLINK.toString()}`,
        color: 0x975597
      }});
      break;
    case "member":
    if(msg.member.roles.some(r=>["Game Creator", "97s Studio Member"].includes(r.name)) ) {
      msg.channel.send(`We have ${msg.guild.memberCount} members in this server!`);
    } else {
      break;
    }break;
  }
});
bot.login(process.env.BOT_TOKEN);
