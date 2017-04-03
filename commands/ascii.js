exports.run = function(client, msg, args) {
  const figlet = require('figlet');
  var convert = args.join(' ');
  var codeblock = '```';

  figlet.text(convert, {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }, function(err, data) {
    if (err) {
      console.log(`ascii err: ${err}`);
      msg.channel.sendMessage('There Was An Error While Generating The ascii');
      return;
    }
    msg.channel.sendMessage(codeblock + data + codeblock);
  });
};
