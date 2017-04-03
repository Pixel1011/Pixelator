exports.run = function (msg, client) {
  const Discord = require('discord.js');

  if (!msg.guild) {
    return msg.channel.sendMessage('This command cannot be used in Dms');
  }

  const embed = new Discord.RichEmbed();
  embed.setColor(720686);
  embed.setTitle(`Info For #${msg.channel.name}`);
  embed.addField('Name:', `#${msg.channel.name}`, true);
  embed.addField('ID:', msg.channel.id, true);
  embed.addField('Position', msg.channel.position, true);

  msg.channel.sendEmbed(embed);
};
