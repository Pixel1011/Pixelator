exports.run = (client, msg, args) => {
  if(!args) {
    args = '100';
  }
  if (args > 1000){
    msg.channel.sendMessage('Please enter a number 1-1000');
  } else if(args < 1){
    msg.channel.sendMessage('Please enter a number 1-1000');
  } else {
    var diceOne = Math.floor( Math.random() * args) + 1;
    msg.channel.sendMessage(`You Rolled ${diceOne}`);
  }
};
