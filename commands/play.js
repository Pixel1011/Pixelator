exports.run = function(client, msg, args) {
  const queues = require('../data/queues.json');
  const play = require('../functions/play.js');
  const getQueue = require('../functions/getQueue.js');


  if (!msg.guild.voiceConnection) {
    if (!msg.member.voiceChannel) return msg.channel.sendMessage('You need to be in a voice channel');
    var chan = msg.member.voiceChannel;
    chan.join();
  }
  let suffix = msg.content.split(' ').slice(1).join(' ');
  if (!suffix) return msg.channel.sendMessage('You need to specify a song link or a song name!');

  play(msg, getQueue(msg.guild.id), suffix);
};
