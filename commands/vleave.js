exports.run = function(client, msg, ErrorChannel) {
  let voiceChan = msg.member.voiceChannel;
  if (!voiceChan) {
    msg.channel.sendMessage('You are not in a voicechannel!');
  } else {
    msg.channel.sendMessage('Leaving...').then(m => {
      voiceChan.leave();
      m.edit(`left ${voiceChan}`);
    }).catch(error => ErrorChannel.sendMessage(`vleave command: ${error}`));
  }
};
