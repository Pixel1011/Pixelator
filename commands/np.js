exports.run = function(client, msg) {
  const getQueue = require('../functions/getQueue.js');
  let queue = getQueue(msg.guild.id);

  if (queue.length == 0) return msg.channel.sendMessage('No music in queue');
  msg.channel.sendMessage(`Currently playing: **${queue[0].title}** | by **${queue[0].requested}**`);
};
