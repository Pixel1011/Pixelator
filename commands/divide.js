exports.run = function(bot, msg, args) {
  let numArray = args.map(n=> parseInt(n));
  let total = numArray.reduce( (p, c) => p/c);

  msg.channel.sendMessage(total);
};

exports.help = {
  name: 'divide',
  description: 'divides numbers',
  usage: 'divide 123 123'
};
