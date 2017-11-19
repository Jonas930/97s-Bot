const Discord = require("discord.js");
const bot = new Discord.Client();
const Prefix = "!"

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.SetGame("try !help");
});

bot.on('guildMemberAdd', member =>{
  member.guild.channels.find('name', 'general').send(member.toString() + ", Welcome to Pokemon Universe Discord Server!\:wink:\n\nIn here, you can use...\n\n!game -> for the newest version of Pokemon Universe.\n!fonts -> for the fonts of Pokemon Universe.\n!demo -> for a little gameplay of Pokemon Universe.\n\nHave A Nice Day ( ͡° ͜ʖ ͡°)");
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
  };
  if (!msg.content.startsWith(Prefix)) return;
  var args = msg.content.substring(Prefix.length).split(" ");
  switch (args[0].toLowerCase()) {
    case "commands":
      msg.delete();
      msg.channel.send('In the Pokemon Universe server, you can use...\n\n!game -> for the newest version of Pokemon Universe.\n!fonts -> for the fonts of Pokemon Universe.\n!demo -> for a little gameplay of Pokemon Universe.');
      break;
    case "demo":
      msg.delete();
      msg.channel.send('The Demo of "Pokemon Universe -Across Time and Space-" is here.\nLink: https://mega.nz/#!OZ4CEKYK!FeSRL2dm9AUy-hiVouWleeNsi1VHhyHgjT56D2mgGQ0');
      break;
    case "fonts":
      msg.delete();
      msg.channel.send('The Fonts that used in "Pokemon Universe -Across Time and Space-" is here.\nLink: https://drive.google.com/file/d/0B_grJsTvgzCAT20wY0NmZE1YTlk/view');
      break;
    case "game":
      msg.delete();
      msg.channel.send('The newest "Pokemon Universe -Across Time and Space-" is " v1.0.2"\nLink: https://mega.nz/#!ydBBzY4a!fgKzFViM1dzrWtoalC7TdZaT_CKSHASrkciSGW4Ge5k');
      break;
    //case "membercount":
    //  msg.delete();
    //  msg.channel.send(`this guild has ${guild.memberCount} members!`);
    //  break;
  }
});

bot.login(process.env.BOT_TOKEN);
