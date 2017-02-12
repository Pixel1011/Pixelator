exports.run = function(bot, msg, args){
  const google = (args.join(' '));
  const url = 'http://lmgtfy.com/?q=' + google;
  msg.channel.sendMessage('Search found ' + url);
};

exports.help = {
  name: 'google',
  description: 'makes a lmgtfy link',
  usage: 'google (search query)'
};
