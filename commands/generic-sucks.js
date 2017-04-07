exports.run = function (msg, client, args) {
  const Discord = require('discord.js');

  const embed = new Discord.RichEmbed;
  embed.setTitle('Generic Sucks');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/294638780940550144/295328759593304064/memeplane.png');
  embed.addField('Generic Sucks', '(Click me for generic)[http://generic.sucks/]', true);

  msg.channel.sendEmbed(embed);
};
