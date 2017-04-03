exports.run = function(client, msg, args) {
  const fs = require('fs');
  const sbl = require('../data/blservers.json');
  const m = args.join(' ');
  const config = require('../config.json');

  if(msg.author.id !== config.ownerid) return msg.channel.sendMessage('Only The Bot Owner Can Use This Command');

  if (m[0] === 'remove') {
    sbl.splice(sbl.indexOf(args[1]));
    fs.writeFile('../data/blservers.json', JSON.stringify(sbl)).then(msg.channel.sendMessage('Added '));
  } else if (m[0] === 'add') {
    sbl.push(m[1]);
    fs.writeFile('../data/blservers.json', JSON.stringify(sbl));
  }
};
