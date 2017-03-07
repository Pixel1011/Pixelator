const Discord = require('discord.js');

exports.run = (client, msg) => {
  const target = msg.mentions.users.first() || msg.author;
  var color = '0x00f731';

  if(target.presence.status == 'online') {
    color = '0x00f731';
  }
  if(target.presence.status == 'idle') {
    color = '0xffc300';
  }
  if(target.presence.status == 'dnd') {
    color = '0xdb0000';
  }
  if(target.presence.status == 'invisible') {
    color = '0xc1bbba';
  }
  const userInfo = new Discord.RichEmbed()
    .setAuthor(`${target.username}`, target.avatarURL)
    .setColor(`${color}`)
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
