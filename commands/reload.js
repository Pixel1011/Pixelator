
const main = require('../Pixel.js');
exports.run = function(client, msg, args) {
  if (msg.author.id !== '192372019378126849') {
    return msg.channel.sendMessage('Only The Bot Owner Can Use This Command!');
  }
  let cmd = args.join(' ');
  main.reload(msg, cmd);
};
