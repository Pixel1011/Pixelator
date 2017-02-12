exports.run = function(bot, msg, args) {
if(msg.author.id !== "192372019378126849") return;
  msg.channel.sendMessage(":white_check_mark: Restarted!");
  setTimeout(function () {
  process.exit(0)
}, 5000);
};

exports.help = {
  name: 'restart',
  description: 'restarts the bot (only bot owner)',
  usage: 'restart'
};
