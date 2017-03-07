exports.run = function(client, msg, args) {
  var rps = ['rock', 'paper', 'scissors'];
  var choice = args.join(' ');
  var botchoice = rps[Math.floor(Math.random() * rps.length)];
  if (!choice) {
    return msg.channel.sendMessage('You Must Choose rock, paper or scissors');
  }

  if (choice === 'rock') {
    if (botchoice === 'rock') {
      return msg.channel.sendMessage('You Chose rock And I Chose rock Its A Tie!');
    } else
    if (botchoice === 'paper') {
      return msg.channel.sendMessage('You Chose rock And I Chose paper I Win!');
    } else
      if (botchoice === 'scissors') {
        return msg.channel.sendMessage('You Chose rock And I Chose scissors You Win!');
      }
  }

  if (choice === 'paper') {
    if (botchoice === 'rock') {
      return msg.channel.sendMessage('You Chose paper And I Chose rock You Win!');
    } else
    if (botchoice === 'paper') {
      return msg.channel.sendMessage('You Chose paper And I Chose paper Its A Tie!');
    } else
      if (botchoice === 'scissors') {
        return msg.channel.sendMessage('You Chose paper And I Chose scissors I Win!');
      }
  }

  if (choice === 'scissors') {
    if (botchoice === 'rock') {
      return msg.channel.sendMessage('You Chose scissors And I Chose rock I Win!');
    } else
    if (botchoice === 'paper') {
      return msg.channel.sendMessage('You Chose scissors And I Chose paper You Win!');
    } else
      if (botchoice === 'scissors') {
        return msg.channel.sendMessage('You Chose scissors And I Chose scissors Its A Tie!');
      }
  }
  return msg.channel.sendMessage('You Have Chosen An Invalid Selection');
};
