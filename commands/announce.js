exports.run = function(client, msg, args) {
  if (msg.author.id !== '192372019378126849') {
    return msg.channel.sendMessage('Only The Bot Owner Can Use This Command!');
  }
  var announcement = args.join(' ');
  var channel = client.channels.get('253638438996148224');

  channel.sendMessage(announcement);
};
