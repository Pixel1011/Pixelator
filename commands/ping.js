exports.run = function(client, msg) {
  msg.channel.sendMessage('Pong!').then(msg2 => {
    msg2.edit(`Pong! \`${msg2.createdTimestamp - msg.createdTimestamp}ms\``);
  });
};
