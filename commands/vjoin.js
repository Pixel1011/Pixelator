exports.run = function(bot, msg) {
  let voiceChan = msg.member.voiceChannel;
  if (!voiceChan || voiceChan.type !== 'voice') {
    msg.channel.sendMessage('You Are Not In A Voice Channel Please Join One').catch(error => msg.channel.sendMessage(error));
  } else if (msg.guild.voiceConnection) {
    msg.channel.sendMessage('Im already in a voice channel');
  } else {
    msg.channel.sendMessage('Joining...').then(msg2 => {
      voiceChan.join().then(() => {
        msg2.edit('Joined successfully!').catch(error => msg.channel.sendMessage(error));
      }).catch(error => msg.channel.sendMessage(error));
    }).catch(error => msg.channel.sendMessage(error));
  }
};

exports.help = {
  name: 'vjoin',
  description: 'makes the bot join a music channel (no music yet!)',
  usage: 'vjoin'
};
