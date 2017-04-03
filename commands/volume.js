exports.run = function(client, msg, args) {
  let suffix = msg.content.split(' ')[1];
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  var player = msg.guild.voiceConnection.player.dispatcher;
  if (!player || player.paused) return msg.channel.sendMessage('There is no muisc add something to the queue with `\`play`');
  if (!suffix) {
    return msg.channel.sendMessage(`The current volume is ${(player.volume * 100)}`);
  } else
  if(!modRole) {
    if(!msg.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
      msg.channel.sendMessage('I need The Permission Manage Roles To Create The Role Bot Controller');
    }
    return msg.guild.createRole({name: 'Bot Controller'}).then(msg.channel.sendMessage('I Have Created A Role Called `Bot Controller` Because There Was No Role Called `Bot Controller`'));
  }
  if(!msg.member.roles.has(modRole.id)) {
    return msg.reply(':no_entry_sign: You Must Have The Role ``Bot Controller`` To Use This Command!');
  }
  let volumeBefore = player.volume;
  let volume = parseInt(suffix);
  if (volume > 100) return msg.channel.sendMessage('The music can\'t be higher then 100');
  player.setVolume((volume / 100));
  msg.channel.sendMessage(`Volume changed from **${(volumeBefore * 100)}%** to **${volume}%**`);
};
