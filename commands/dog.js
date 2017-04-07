exports.run = function(client, msg) {
  const request = require('request');

  msg.channel.sendMessage('`Getting info`').then(m => {

    request('http://random.dog/woof', function (error, res, body) {

      if (error) {
        m.edit('There Was An Error While Getting info');
        console.log(`dog Command Error: ${error}`);
        return;
      }

      msg.channel.sendFile(`http://random.dog/${body.text}`).then(m.delete());
    });
  });
};
