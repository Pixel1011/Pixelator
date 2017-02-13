exports.run = function(client, msg, args){
  var e = (args.join(' '));
  msg.channel.sendMessage(`2 Nukes Have Been Launched To ${e}'s location`);
  setTimeout(function () {
    msg.channel.sendMessage(`***${e} Gets Blown Up***`);
  }, 5000);
};
