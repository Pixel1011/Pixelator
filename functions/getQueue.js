const queues = require('../data/queues.json');
function getQueue(guild) {
  if (!guild) return;
  if (typeof guild == 'object') guild = guild.id;
  if (queues[guild]) return queues[guild];
  else queues[guild] = [];
  return queues[guild];
}
module.exports = getQueue;
