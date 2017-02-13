exports.run = function(client, msg, args) {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  if(msg.member.roles.has(modRole.id)) {
    let msgcount = parseInt(args.join(' '));
    msg.channel.fetchMessages({
      limit: msgcount
    }).then(messages => msg.channel.bulkDelete(messages));
	msg.channel.sendMessage(`${msgcount} messages were deleted < if that was 1 that will not work`);
  } else {
    msg.reply('you don\'t have the permission to use this command.');
  }
};
