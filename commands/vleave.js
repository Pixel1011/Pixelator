exports.run = function(bot, msg) {
  let voiceChan = msg.member.voiceChannel;
  if (!voiceChan) {
    msg.channel.sendMessage('You are not in a voicechannel!');
  } else {
    msg.channel.sendMessage('Leaving...').then(msg2 => {
      voiceChan.leave();
      msg2.edit(`left ${voiceChan}`);
    }).catch(error => msg.channel.sendMessage(error));
  }
};

exports.help = {
  name: 'vleave',
  description: 'makes the bot leave the voice channel',
  usage: 'vleave'
};
