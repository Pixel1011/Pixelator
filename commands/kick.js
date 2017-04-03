const Discord = require('discord.js');
exports.run = function(client, msg, args) {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
  let modlog = msg.guild.channels.find('name', 'modlog');
  if (!msg.guild) {
    return msg.channel.sendMessage('This command cannot be used in Dms');
  }
  if (!msg.guild) {
    return msg.channel.sendMessage('This command cannot be used in Dms');
  }
  if(!modRole) {
    if(!msg.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
      msg.channel.sendMessage('I need The Permission Manage Roles To Create The Role Bot Controller');
    }
    return msg.guild.createRole({name: 'Bot Controller'}).then(msg.channel.sendMessage('I Have Created A Role Called `Bot Controller` Because There Was No Role Called `Bot Controller`'));
  }
  if(!msg.member.roles.has(modRole.id)) {
    return msg.reply(':no_entry_sign: You Must Have The Role ``Bot Controller`` To Use This Command!');
  }
  if (!modlog) {
    return msg.reply('I cannot find a modlog channel');
  }
  if(msg.mentions.users.size === 0) {
    return msg.reply('Please mention a user to kick');
  }
  let kickMember = msg.guild.member(msg.mentions.users.first());
  if(!user) {
    return msg.reply('That user does not seem valid');
  }
  if(!msg.guild.member(msg.author.id).hasPermission('KICK_MEMBERS')) {
    return msg.reply('You don\'t have the permissions (KICK_MEMBER) to do this.');
  }
  if (reason.length < 1){
    return msg.reply('You must supply a reason for the kick.');
  }
  if(msg.author.id == user.id) {
    return msg.channel.sendMessage('You Cannot Ban Yourself');
  }
  if (user.highestRole.position > msg.member.highestRole.position) {
    return msg.channel.sendMessage('You Cannot kick A User Which Has A Higher Role Than You');
  }
  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .addField('Action:', 'Kick', true)
    .addField('Reason:', `${reason}`, true)
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`, true)
    .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`, true);

  if(!msg.guild.member('253915933276504064').hasPermission('KICK_MEMBERS')) {
    return msg.reply('I don\'t have the permissions (KICK_MEMBER) to do this.');
  }
  user.sendMessage(`You Have Been Kicked From ${msg.guild.name} For ${reason}`);
  kickMember.kick().then(member => {
    client.channels.get(modlog.id).sendEmbed(embed);
    msg.reply(`:white_check_mark: ${member.user.username} was succesfully kicked.`);
  });
};
