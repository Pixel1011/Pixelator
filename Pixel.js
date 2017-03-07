const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const chalk = require('chalk');
require('./util/eventLoader')(client);

client.on('guildCreate', guild => {
  var testChannel = client.channels.get('257924189690789888');
  var prefix = '`';
  client.user.setGame(`${prefix}help | On ${client.guilds.size} Servers! | Working On Updates!`);
  //guild.defaultChannel.sendMessage('Thanks for inviting Me! Please Join My server If You Have Any Questions https://discord.gg/7xmdtZu');
  if (testChannel) {
    let botCount = guild.members.filter(m => m.user.bot == true && m.user.id != client.user.id).size + 1;
    let embedData = {
      color:0x09f969 ,
      title: `Guild Create: ${guild.name} (ID: ${guild.id})`,
      description: `Owner: ${guild.owner.user.username}#${guild.owner.user.discriminator} (ID: ${guild.owner.id})
      Members: ${guild.memberCount}
      Bots: ${botCount} (${Math.floor((botCount/guild.memberCount)*100)}%)`,
      footer: {
        text: `Now in ${client.guilds.size} guilds.`
      }
    };
    testChannel.sendMessage('', { embed: embedData });
  }
});

client.on('guildDelete', guild => {
  var prefix = '`';
  client.user.setGame(`${prefix}help | On ${client.guilds.size} Servers! | Working On Updates!`);
  var testChannel = client.channels.get('257924189690789888');
  let embedData = {
    color:0x09f969,
    title: `Guild Delete: ${guild.name} (ID: ${guild.id})`,
    description: `Owner: ${guild.owner.user.username}#${guild.owner.user.discriminator} (ID: ${guild.owner.id})`,
    footer: {
      text: `Now in ${client.guilds.size} guilds.`
    }
  };
  testChannel.sendMessage('', { embed: embedData });
});

var reload = (msg, cmd) => {
  delete require.cache[require.resolve('./commands/' + cmd)];
  try {
    let cmdFile = require('./commands/' + cmd);
  } catch (err) {
    msg.channel.sendMessage(`Problem loading ${cmd}: ${err}`);
  }
  msg.channel.sendMessage(`${cmd} Was Reloaded Successfully!`);
};
exports.reload = reload;


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(config.token);
