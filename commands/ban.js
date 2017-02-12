exports.run = function(bot, msg) {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  if(!msg.member.roles.has(modRole.id)) {
    return msg.reply(':no_entry_sign: You Must Have The Role ``Bot Controller`` To Use This Command!');
  }
  if(msg.mentions.users.size === 0) {
    return msg.reply('no_entry_sign: Please mention a user to ban');
  }
  let banMember = msg.guild.member(msg.mentions.users.first());
  if(!banMember) {
    return msg.reply('Who Is That? I Dont See That Player');
  }
  if(!msg.guild.member(bot.user).hasPermission('BAN_MEMBERS')) {
    return msg.reply('I dont have the permissions (BAN_MEMBER) to do this');
  }
  banMember.ban().then(member => {
    msg.reply(`:white_check_mark:${member.user.username} was succesfully Banned`);
  });
};

exports.help = {
  name: 'ban',
  description: 'bans the @mentioned user',
  usage: 'ban @Pixel'
};
