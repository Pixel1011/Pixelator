exports.run = function(client, msg) {
  const getQueue = require('../functions/getQueue.js');

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
  let queue = getQueue(msg.guild.id);
  let player = msg.guild.voiceConnection.player.dispatcher;
  if (queue.length == 0) return msg.channel.sendMessage('No music in queue');
  for (var i = queue.length - 1; i >= 0; i--) {
    player.end();
    queue.splice(i, 1);
  }
  msg.channel.sendMessage('Stopped and cleared the queue');
};
