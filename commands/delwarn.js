
exports.run = function(client, msg, args) {
  const fs = require('fs');
  const warns = require('../data/warns.json');
  const TChannel = client.channels.get('295964012267700224');
  let user = msg.mentions.users.first();
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  if (!msg.guild) {
    return msg.channel.sendMessage('This command cannot be used in Dms');
  }
  if(!modRole) {
    if(!msg.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
      msg.channel.sendMessage('I need The Permission Manage Roles To Create The Role Bot Controller');
    }
    return msg.guild.createRole({name: 'Bot Controller'}).then(msg.channel.sendMessage('I Have Created A Role Called `Bot Controller` Because There Was No Role Called `Bot Controller`'));
  }
  if(!msg.member.roles.has(modRole.id)) {
    return msg.reply(':no_entry_sign: You Must Have The Role ``Bot Controller`` To Use This Command!');
  }

  if (!user) return msg.channel.sendMessage('You need to mention the user');
  let list = Object.keys(warns);
  let found;
  for (let i = 0; i < list.length; i++) {
    if (warns[list[i]].user.id == user.id) {
      if (warns[list[i]].server.id == msg.guild.id) {
        found = list[i];
        break;
      }
    }
  }
  if (!found) return msg.channel.sendMessage('No warns recorded for that user');
  msg.channel.sendMessage(`Deleted Warn: \`\`\`User: ${warns[found].user.name} (${warns[found].user.id})\nReason: ${warns[found].reason}\nServer: ${warns[found].server.name} (${warns[found].server.id})\nWarnID: ${warns[found].caseid}\n\`\`\``);
  delete warns[found];
  TChannel.sendMessage(`Deleted warn in ${msg.guild.name}`);
  fs.writeFile('./data/warns.json', JSON.stringify(warns));
};
