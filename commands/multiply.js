exports.run = function(client, msg, args) {
  let numArray = args.map(n=> parseInt(n));
  let total = numArray.reduce( (p, c) => p*c);

  msg.channel.sendMessage(total);
};
