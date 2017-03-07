const Discord = require('discord.js');
exports.run = (client, msg, args) => {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  if(!msg.member.roles.has(modRole.id)) {
    return msg.reply(':no_entry_sign: You Must Have The Role ``Bot Controller`` To Use This Command!');
  }
  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
  let modlog = msg.guild.channels.find('name', 'modlog');
  let muteRole = client.guilds.get(msg.guild.id).roles.find('name', 'Muted');
  if (!modlog) {
    return msg.reply('I cannot find a modlog channel');
  }

  if (!muteRole) {
    return msg.reply('I cannot find a Muted role');
  }

  if (reason.length < 1){
    return msg.reply('You must supply a reason for the UnMute.');
  }

  if (msg.mentions.users.size < 1) {
    return msg.reply('You must mention someone to UnMute them.');
  }
  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .addField('Action:', 'UnMute', true)
    .addField('Reason:', `${reason}`, true)
    .addField('User:', `${user.username}#${user.discriminator}`, true)
    .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`, true);

  if (!msg.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
    return msg.reply('I do not have the correct permissions. MANAGE_ROLES');
  }

  if (msg.guild.member(user).roles.has(muteRole.id)) {
    msg.guild.member(user).removeRole(muteRole).then(() => {
      msg.channel.sendMessage(`Succesfully Unmuted ${user}`);
      user.sendMessage(`You Have Been UnMuted From ${msg.guild.name} For ${reason}`);
      client.channels.get(modlog.id).sendEmbed(embed);
    });
  } else {
    return msg.channel.sendMessage(`${user} Cannot Be Unmuted`);
  }
};
