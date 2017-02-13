exports.run = function(client, msg) {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  if(!msg.member.roles.has(modRole.id)) {
    return msg.reply(':no_entry_sign: You Must Have The Role ``Bot Controller`` To Use This Command!');
  }
  if(msg.mentions.users.size === 0) {
    return msg.reply('Please mention a user to kick');
  }
  let kickMember = msg.guild.member(msg.mentions.users.first());
  if(!kickMember) {
    return msg.reply('That user does not seem valid');
  }
  if(!msg.guild.member('253915933276504064').hasPermission('KICK_MEMBERS')) {
    return msg.reply('I don\'t have the permissions (KICK_MEMBER) to do this.');
  }
  kickMember.kick().then(member => {
    msg.reply(`:white_check_mark: ${member.user.username} was succesfully kicked.`);
  });
};
