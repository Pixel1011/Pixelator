exports.run = function(client, msg, args) {
  const getQueue = require('../functions/getQueue.js')

  let queue = getQueue(msg.guild.id);
  if (queue.length == 0) return msg.channel.sendMessage('No music in queue');
  let text = '';
  for (let i = 0; i < queue.length; i++) {
    text += `${(i + 1)}. ${queue[i].title} | requested by ${queue[i].requested}\n`;
  }
  msg.channel.sendMessage(`\`\`\`${text}\`\`\``);
};
