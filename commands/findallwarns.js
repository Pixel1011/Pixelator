exports.run = function(client, msg) {
  if (msg.author.id !== '192372019378126849') {
    return msg.channel.sendMessage('Only The Bot Owner Can Use This Command');
  }
  var codeblock = '```';
  const warns = require('../data/warns.json');
  let list = Object.keys(warns);
  let found = '';
  let foundCounter = 0;
  let warnCase;
  for (let i = 0; i < list.length; i++) {
    foundCounter++;
    found += `${codeblock}${(foundCounter)}. Username: ${warns[list[i]].user.name}\nAdmin: ${warns[list[i]].admin.name}\nServer: ${warns[list[i]].server.name}\nReason: ${warns[list[i]].reason}\nWarnID: ${warns[list[i]].caseid}\n${codeblock}`;
  }
  if (foundCounter == 0) return msg.channel.sendMessage('No warns In warns.json');
  msg.channel.sendMessage(`Found ${foundCounter} warns\n ${found}`);
};
