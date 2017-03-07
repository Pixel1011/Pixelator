exports.run = function(client, msg, args) {
  var ifstate = args.join(' ');
  if(!ifstate) {
    return msg.channel.sendMessage('hint: divide 1 1');
  }
  let numArray = args.map(n=> parseInt(n));
  let total = numArray.reduce( (p, c) => p/c);

  msg.channel.sendMessage(total);
};
