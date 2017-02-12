exports.run = function(bot, msg) {
  msg.channel.sendMessage('Pong!').then(msg2 => {
    msg2.edit(`Pong! \`${msg2.createdTimestamp - msg.createdTimestamp}ms\``);
  });
};

exports.help = {
  name: 'ping',
  description: 'used to test response times',
  usage: 'ping'
};
