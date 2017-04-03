exports.run = function(client, msg) {
  var http = require('http');
  var output;

  msg.channel.sendMessage('`Getting info`').then(m => {

  http.get('http://random.cat/meow', function(res) {
    var body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      output = JSON.parse(body);
     msg.channel.sendFile(output.file).then(m.delete());
    });
  });
  });
};
