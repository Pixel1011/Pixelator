const Discord = require('discord.js');

exports.run = (client, msg) => {
  const target = msg.mentions.users.first() || msg.author;
  var color = 0x5d5f63;
  var onlineStatus = target.presence.status;
  var streaming = false;

  if (target.presence.game) {
    if (target.presence.game.type == 1) streaming = true;
  }

  if (onlineStatus == 'online' && !streaming) {
    color = 0x00f731;
  } else if (streaming) {
    color = 0x00f731;
  } else if (onlineStatus == 'idle') {
    color = 0xffc300;
  } else if (onlineStatus == 'dnd') {
    color = 0xdb0000;
  }

  const userInfo = new Discord.RichEmbed()
    .setAuthor(`${target.username}`, target.avatarURL)
    .setColor(color)
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
