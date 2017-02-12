exports.run = function(bot, msg, args) {
  let numArray = args.map(n=> parseInt(n));
  let total = numArray.reduce( (p, c) => p*c);

  msg.channel.sendMessage(total);
};

exports.help = {
  name: 'multiply',
  description: 'multiplys numbers',
  usage: 'multiply 123 123'
};
