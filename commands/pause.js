exports.run = function(client, msg, args) {
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
  let player = msg.guild.voiceConnection.player.dispatcher;
  if (!player || player.paused) return msg.channel.sendMessage('Bot is not playing');
  msg.channel.sendMessage('Pausing music...').then(m => {
    player.pause();
    m.edit('Paused Music!');
  });
};
