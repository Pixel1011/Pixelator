exports.run = function(client, msg, args) {
  if (msg.author.id == '192372019378126849'){
    var e = (args.join(' '));
    msg.channel.sendMessage(`${e}\n`.repeat(300));
  } else {
    msg.channel.sendMessage('do you really think you could use spam!??!?!');
  }
};
