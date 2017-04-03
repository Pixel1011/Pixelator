exports.run = function(client, msg) {
  var codeblock = '```';
  const warns = require('../data/warns.json');
  if (!msg.guild) {
    return msg.channel.sendMessage('This command cannot be used in Dms');
  }
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  if(!modRole) {
    if(!msg.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
      msg.channel.sendMessage('I need The Permission Manage Roles To Create The Role Bot Controller');
    }
    return msg.guild.createRole({name: 'Bot Controller'}).then(msg.channel.sendMessage('I Have Created A Role Called `Bot Controller` Because There Was No Role Called `Bot Controller`'));
  }
  if(!msg.member.roles.has(modRole.id)) {
    return msg.reply(':no_entry_sign: You Must Have The Role ``Bot Controller`` To Use This Command!');
  }
  let user = msg.mentions.users.first();
  if (!user) return msg.channel.sendMessage('You need to mention the user');
  let list = Object.keys(warns);
  let found = '';
  let foundCounter = 0;
  let warnCase;
  for (let i = 0; i < list.length; i++) {
    if (warns[list[i]].user.id == user.id) {
    if (warns[list[i]].server.id == msg.guild.id) {
      foundCounter++;
      found += `${codeblock}${(foundCounter)}. Username: ${warns[list[i]].user.name}\nAdmin: ${warns[list[i]].admin.name}\nServer: ${warns[list[i]].server.name}\nReason: ${warns[list[i]].reason}\nWarnID: ${warns[list[i]].caseid}\n${codeblock}`;
    }
    }
  }
  if (foundCounter == 0) return msg.channel.sendMessage('No warns recorded for that user');
  msg.channel.sendMessage(`Found ${foundCounter} warns\n ${found}`);
};
