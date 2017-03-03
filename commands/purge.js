exports.run = function(client, msg, args) {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  if(msg.member.roles.has(modRole.id)) {
    let msgcount = parseInt(args.join(' '));
    if(msgcount == '1') {
      return msg.channel.sendMessage('You Must Select A Number Beetween 2 and 100')
    }
    if(msgcount > '100') {
      return msg.channel.sendMessage('You Must Select A Number Beetween 2 and 100')
    }
    msg.channel.fetchMessages({
      limit: msgcount
    }).then(messages => msg.channel.bulkDelete(messages));
    msg.channel.sendMessage(`${msgcount} messages were deleted < if that was 1 that will not work`);
  } else {
    msg.reply('you don\'t have the permission to use this command.');
  }
};
