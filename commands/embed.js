exports.run = function(client, msg, args) {
  if(msg.author.id !== '192372019378126849') return;
  msg.delete('-embed');
  var embed = {
    color:0xa0d4ff ,
    title: 'Embed:',
    description: (args.join(' '))
  };
  msg.channel.sendMessage('', {embed: embed});
};
