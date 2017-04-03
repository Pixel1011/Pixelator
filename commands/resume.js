exports.run = function(client, msg, args) {
  const queues = require('../data/queues.json');
  function getQueue(guild) {
    if (!guild) return;
    if (typeof guild == 'object') guild = guild.id;
    if (queues[guild]) return queues[guild];
    else queues[guild] = [];
    return queues[guild];
  }

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
  let player = msg.guild.voiceConnection.player.dispatcher
  if (!player) return msg.channel.sendMessage('No music is playing at this time.');
  if (player.playing) return msg.channel.sendMessage('The music is already playing');
  var queue = getQueue(msg.guild.id);
  msg.channel.sendMessage("Resuming music...").then(m => {
    player.resume();
    m.edit('Resumed Music!');
  });
};
