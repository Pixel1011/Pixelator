exports.run = function(client, msg) {
  if (msg.author.id !== '192372019378126849') {
    return msg.channel.sendMessage('Only the Bot Owner Can Use This Command');
  }
  let request=require('superagent');
  request.get('http://random.cat/meow').then(res => {
    msg.channel.sendFile(res).catch(err=> {
      console.log(res.body);
      msg.channel.sendMessage(`An Error Occured ${err}`);
    });
  });
};
