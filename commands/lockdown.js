const ms = require('ms');
exports.run = (client, msg, args) => {
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  if(!msg.member.roles.has(modRole.id)) {
    return msg.reply(':no_entry_sign: You Must Have The Role ``Bot Controller`` To Use This Command!');
  }
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return msg.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    msg.channel.overwritePermissions(msg.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      msg.channel.sendMessage('Lockdown lifted.');
      clearTimeout(client.lockit[msg.channel.id]);
      delete client.lockit[msg.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    msg.channel.overwritePermissions(msg.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      msg.channel.sendMessage(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[msg.channel.id] = setTimeout(() => {
          msg.channel.overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: null
          }).then(msg.channel.sendMessage('Lockdown lifted.')).catch(console.error);
          delete client.lockit[msg.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
