const Discord = require("discord.js");
const bot = new Discord.Client();
const Prefix = "!"

bot.on('ready', () => {
  console.log(`Yes, My Master. ${bot.user.tag} is here!`);
  bot.user.setGame("Pokemon Universe");
});

bot.on('guildMemberAdd', member =>{
  member.guild.channels.find('name', 'general').send(member.toString() + ", Welcome to **Pokemon Universe** Discord Server!\:wink:\n\nIn here, you can use...\n\n**!game** -> for the newest version of Pokemon Universe.\n**!fonts** -> for the fonts of Pokemon Universe.\n**!demo** -> for a little gameplay of Pokemon Universe.\n\nHave A Nice Day ( ͡° ͜ʖ ͡°)");
  member.addRole(member.guild.roles.find('name', 'Trainers'));
});

bot.on('message', msg => {
  if (msg.author.equals(bot.user)) return;
  var args = msg.content.split(" ");
  switch (args[0].toLowerCase()) {
    case "hmmm":
      msg.channel.send('Hmmm?\:thinking:');
      break;
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
    case "commands":
      msg.channel.send('In the **Pokemon Universe** Discord Server, you can use...\n\n**!game** -> for the newest version of Pokemon Universe.\n**!fonts** -> for the fonts of Pokemon Universe.\n**!demo** -> for a little gameplay of Pokemon Universe.');
      break;
    case "demo":
      msg.channel.send({embed:{
        title:'The Demo of "Pokemon Universe -Across Time and Space-" is here.',
        description: "Link: https://mega.nz/#!OZ4CEKYK!FeSRL2dm9AUy-hiVouWleeNsi1VHhyHgjT56D2mgGQ0",
        color: 0x975597
      }});
      break;
    case "fonts":
      msg.channel.send({embed:{
        title:'The Fonts that used in "Pokemon Universe -Across Time and Space-" is here.',
        description: "Link: https://drive.google.com/file/d/0B_grJsTvgzCAT20wY0NmZE1YTlk/view",
        color: 0x975597
      }});
      break;
    case "game":
      msg.channel.send({embed:{
        title:`The newest "Pokemon Universe -Across Time and Space-" is "**${version.toString()}**"`,
        description: "Link: https://mega.nz/#!ydBBzY4a!fgKzFViM1dzrWtoalC7TdZaT_CKSHASrkciSGW4Ge5k",
        color: 0x975597
      }});
      break;
    case "membercount":
      msg.channel.send(`This guild has ${msg.guild.memberCount} members!`);
      break;
  }
});
