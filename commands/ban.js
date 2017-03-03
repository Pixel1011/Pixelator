
const Discord = require('discord.js');
exports.run = function(client, msg, args) {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
  let modlog = msg.guild.channels.find('name', 'modlog');
  if(!msg.member.roles.has(modRole.id)) {
    return msg.reply(':no_entry_sign: You Must Have The Role ``Bot Controller`` To Use This Command!');
  }
  if(msg.mentions.users.size === 0) {
    return msg.reply('no_entry_sign: Please mention a user to ban');
  }
  let banMember = msg.guild.member(msg.mentions.users.first());
  if(!user) {
    return msg.reply('That user seems invalid');
  }
  if (reason.length < 1){
    return msg.reply('You must supply a reason for the ban.');
  }
  if(!msg.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
    return msg.reply('I dont have the permissions (BAN_MEMBER) to do this');
  }
  const embed = new Discord.RichEmbed()
    .setColor(3447003)
    .setTimestamp()
    .addField('Action:', 'Ban', true)
    .addField('Reason:', `${reason}`, true)
    .addField('User:', `${user.username}#${user.discriminator}`, true)
    .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`, true);

  if(!msg.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
    return msg.reply('I dont have the permissions (BAN_MEMBER) to do this');
  }
  user.sendMessage(`You Have Been Banned From ${msg.guild.name} For ${reason}`);
  banMember.ban().then(member => {
    client.channels.get(modlog.id).sendEmbed(embed);
    msg.reply(`:white_check_mark: ${member.user.username} was succesfully Banned`);
  });
};
