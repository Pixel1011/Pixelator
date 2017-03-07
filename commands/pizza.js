exports.run = function(client, msg, args){
  if (msg.author.id !== '192372019378126849') return;
  msg.channel.sendMessage('ooh pizza');
  setTimeout(function () {
    msg.channel.sendMessage('***eats pizza*** nom nom nom');
  }, 5000);
};
