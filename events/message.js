const settings = require('../settings.json');
module.exports = msg => {
  let client = msg.client;
  if (msg.author.client) return;
  if (!msg.content.startsWith(settings.prefix)) return;
  let command = msg.content.split(' ')[0].slice(settings.prefix.length);
  let args = msg.content.split(' ').slice(1);
  let perms = client.elevation(msg);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, msg, args, perms);
  }
};
