exports.run = function(client, msg) {
if(msg.author.id !== '192372019378126849') return;
  msg.channel.sendMessage(':white_check_mark: Restarted!');
  setTimeout(function () {
    process.exit(0);
  }, 5000);
};
