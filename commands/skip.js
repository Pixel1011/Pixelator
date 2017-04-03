exports.run = function(client, msg, args) {
  if (!msg.guild.voiceConnection) return msg.channel.sendMessage('Bot is not playing!');
  let player = msg.guild.voiceConnection.player.dispatcher;
  if (!player || player.paused) return msg.channel.sendMessage('Bot is not playing!');
  msg.channel.sendMessage('Skipping song...').then(m=> {
    player.end();
    m.edit('Skipped song!');
  });
};
