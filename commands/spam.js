exports.run = function(bot, msg, args) {
  if (msg.author.id == '192372019378126849'){
    var e = (args.join(' '));
    msg.channel.sendMessage(`${e}\n`.repeat(500));
  } else {
    msg.channel.sendMessage('You Must Be The Bot Owner To Use This Command!');
  }
};

exports.help = {
  name: 'spam',
  description: 'makes the bot spam (only bot owner)',
  usage: 'spam (text)'
};
