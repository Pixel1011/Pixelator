exports.run = function(client, msg, args){
  var e = (args.join(' '));
  msg.channel.sendMessage(`a tornado has been created and sent to ${e}'s location`);
  setTimeout(function () {
    msg.channel.sendMessage(`***${e} Gets horribly killed in a tornado***`);
  }, 5000);
};
