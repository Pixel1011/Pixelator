const Discord = require('discord.js');
exports.run = function(client, msg, args) {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
  let modlog = msg.guild.channels.find('name', 'modlog');
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
  if (reason.length < 1){
    return msg.reply('You must supply a reason for the kick.');
  }
  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .addField('Action:', 'Kick', true)
    .addField('Reason:', `${reason}`, true)
    .addField('User:', `${user.username}#${user.discriminator}`, true)
    .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`, true);

  if(!msg.guild.member('253915933276504064').hasPermission('KICK_MEMBERS')) {
    return msg.reply('I don\'t have the permissions (KICK_MEMBER) to do this.');
  }
  kickMember.kick().then(member => {
    client.channels.get(modlog.id).sendEmbed(embed);
    msg.reply(`:white_check_mark: ${member.user.username} was succesfully kicked.`);
  });
};
