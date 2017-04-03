const Discord = require('discord.js');
exports.run = (client, msg, args) => {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  if(!modRole) {
    if(!msg.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
      msg.channel.sendMessage('I need The Permission Manage Roles To Create The Role Bot Controller');
    }
    return msg.guild.createRole({name: 'Bot Controller'}).then(msg.channel.sendMessage('I Have Created A Role Called `Bot Controller` Because There Was No Role Called `Bot Controller`'));
  }
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

  msg.guild.channels.forEach(c => {
    if (c.type == 'text') {
      c.overwritePermissions(muteRole, { SEND_MESSAGES: false });
    }
    else if (c.type == 'voice') {
      c.overwritePermissions(muteRole, { SPEAK: false });
    }
  });

  if (!muteRole) {
    return msg.reply('I cannot find a Muted role');
  }

  if (msg.mentions.users.size < 1) {
    return msg.reply('You must mention someone to mute them.');
  }

  if (reason.length < 1){
    return msg.reply('You must supply a reason for the mute.');
  }

  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .addField('Action:', 'Mute', true)
    .addField('Reason:', `${reason}`, true)
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`, true)
    .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`, true);

  if (!msg.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
    return msg.reply('I do not have the correct permissions. MANAGE_ROLES');
  }

  if (msg.guild.member(user).roles.has(muteRole.id)) {
    msg.channel.sendMessage(`${user} Cannot Be Muted Again`)
  } else {
    msg.guild.member(user).addRole(muteRole).then(() => {
      msg.channel.sendMessage(`Succesfully Muted ${user}`);
      user.sendMessage(`You Have Been Muted From ${msg.guild.name} For ${reason}`);
      client.channels.get(modlog.id).sendEmbed(embed);
    });
  }

};
