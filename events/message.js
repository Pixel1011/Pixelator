const config = require('../config.json');
const Discord = require('discord.js');
module.exports = msg => {
  if (!msg.content.startsWith(config.prefix)) return;
  if (msg.content.startsWith('```')) return;
  if (msg.content.startsWith('``')) return;
  if (msg.author.bot) return;

  const client = msg.client;
  const LogChannel = client.channels.get('257924189690789888');
  const ErrorChannel = client.channels.get('275064558740307969');
  const args = msg.content.split(' ');
  const command = args.shift().slice(config.prefix.length);


  try {
    let cmdFile = require(`../commands/${command}`);
    cmdFile.run(client, msg, args, LogChannel, ErrorChannel);
  } catch (err) {
    if(msg.guild) {
      const embed = new Discord.RichEmbed();
      embed.setColor(0xdb0000);
      embed.setTimestamp();
      embed.setTitle('Error');
      embed.addField('Command:', `${command}`, true);
      embed.addField('Message:', `${msg.content}`, true);
      embed.addField('Author:', `${msg.author.username}#${msg.author.discriminator}(${msg.author.id})`, true);
      embed.addField('Guild', `${msg.guild.name}(${msg.guild.id})`, true);
      embed.addField('Error:', `${err}`, true);

      return ErrorChannel.sendEmbed(embed);
    } else
    var embed2 = new Discord.RichEmbed();
    embed2.setColor(0xdb0000);
    embed2.setTimestamp();
    embed2.setTitle('Error');
    embed2.addField('Command:', `${command}`, true);
    embed2.addField('Message:', `${msg.content}`, true);
    embed2.addField('AuthorID:', `${msg.author.id}`, true);
    embed2.addField('Guild', `${msg.author.username}#${msg.author.discriminator}'s DM`, true);
    embed2.addField('Error:', `${err}`, true);

    ErrorChannel.sendEmbed(embed2);
  }
};
