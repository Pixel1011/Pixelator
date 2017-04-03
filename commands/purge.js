exports.run = function(client, msg, args) {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  if(!modRole) {
    if(!msg.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
      msg.channel.sendMessage('I need The Permission Manage Roles To Create The Role Bot Controller');
    }
    return msg.guild.createRole({name: 'Bot Controller'}).then(msg.channel.sendMessage('I Have Created A Role Called `Bot Controller` Because There Was No Role Called `Bot Controller`'));
  }
  if(msg.member.roles.has(modRole.id)) {
    let msgcount = parseInt(args.join(' '));
    if(msgcount == '1') {
      return msg.channel.sendMessage('You Must Select A Number Beetween 2 and 100');
    }
    if(msgcount > '100') {
      return msg.channel.sendMessage('You Must Select A Number Beetween 2 and 100');
    }
    msg.channel.fetchMessages({
      limit: msgcount
    }).then(msgs => {
      msg.channel.bulkDelete(msgs);
    });
    msg.channel.sendMessage(`${msgcount} messages were deleted`);
  } else {
    msg.reply('you don\'t have the permission to use this command.');
  }
};
