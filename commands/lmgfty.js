exports.run = function(client, msg, args){
  const google = (args.join(' '));
  const url = 'http://lmgtfy.com/?q=' + google;
  msg.channel.sendMessage('Search found ' + url);
};
