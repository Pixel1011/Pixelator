exports.run = function(bot, msg, args) {
  if(msg.author.id !== '192372019378126849') return;
  msg.channel.sendMessage(args.join(' '));
};

exports.help = {
  name: 'say',
  description: 'makes the bot say stuff (only bot owner)',
  usage: 'say (text)'
};
