const Discord = require('discord.js');

exports.run = (client, msg) => {
  const target = msg.mentions.users.first() || msg.author;

  const userInfo = new Discord.RichEmbed()
    .setAuthor(`${target.username}`, target.avatarURL)
    .setColor(0x00f731)
    .addField('ID', `${target.id}`, true)
    .addField('Name', `${target.username}#${target.discriminator}`, true)
    .addField('Status', `${target.presence.status}`, true)
    .addField('Bot Account', `${target.bot}`, true)
    .addField('Playing', target.presence.game != null ? target.presence.game.name : 'Nothing', true)
    .addField('Joined Discord', `${target.createdAt}`, true)
    .setThumbnail(target.avatarURL)
    .setTimestamp();

  msg.channel.sendEmbed(userInfo, '', { disableEveryone: true });
};
