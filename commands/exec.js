const childProcess = require('child_process');
exports.run = function(client, msg, args) {
  if (msg.author.id !== '192372019378126849') {
    return msg.channel.sendMessage('Only The Bot Owner Can Use This Command!');
  }
  childProcess.exec(args.join(' '), (err, stdout) => {
    var errEmbed = {
      color: 0xdb0000,
      title: 'Error:',
      description: `${err}`
    };
    if (err) return msg.channel.sendEmbed(errEmbed).catch(console.log());
    var succEmbed = {
      color: 0xa0d4ff,
      title: 'Output:',
      description: stdout
    };
    msg.channel.sendEmbed(succEmbed).catch(console.log());
  });
};
