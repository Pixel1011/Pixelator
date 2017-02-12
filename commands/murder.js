exports.run = function(bot, msg, args){
var e = (args.join(" "));
msg.channel.sendMessage(`2 Nukes Have Been Launched To ${e}'s location`)
setTimeout(function () {
msg.channel.sendMessage(`***${e} Gets Blown Up***`)
}, 5000);
};

exports.help = {
  name: 'murder',
  description: 'murder\'s someone',
  usage: 'murder Pixel'
};
