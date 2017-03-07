exports.run = (client, msg, args) => {
  if (msg.author.id !== '192372019378126849') {
    return msg.channel.sendMessage('Only The Bot Owner Can Use This Command!');
  }
  var announcement = args.join(' ');
  client.guilds.forEach(guild => {
    guild.defaultChannel.sendMessage(announcement);
  });
};
