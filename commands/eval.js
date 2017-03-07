const Discord = require('discord.js')
exports.run = function(client, msg, args, guild) {
  if (msg.author.id !== '192372019378126849') {
    return msg.channel.sendMessage('Only The Bot Owner Can Use This Command!');
  }
  var code = args.join(' ');
  try {
    var res = eval(code);
    if (typeof res !== 'string') {
      res = require('util').inspect(res);
    }
  } catch (e) {
    res = e.message;
  }
  var embed = {
    color:0xa0d4ff,
    description:`**Input:** ${code}
    **Output:** ${res}`
  };
  msg.channel.sendMessage('', {embed: embed});
};
