exports.run = function(client, msg, args) {
  const warns = require('../data/warns.json');
  const Discord = require('discord.js');
  const TChannel = client.channels.get('295964012267700224');
  const fs = require('fs');
  let modRole = msg.guild.roles.find('name', 'Bot Controller');
  let modlog = msg.guild.channels.find('name', 'modlog');
  let c = msg.content;
  let usr = msg.mentions.users.first();
  if (!usr) return msg.channel.sendMessage("You need to mention the user");
  let rsn = args.slice(1).join(' ');
  let caseid = genToken(20);

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
  if (!modlog) {
    return msg.reply('I cannot find a modlog channel');
  }
  if(!rsn) {
    rsn = 'No Reason Given';
  }

  function genToken(length) {
    let key = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      key += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return key;
  }

  warns[caseid] = {
    'admin': {
      'name': msg.author.username,
      'discrim': msg.author.discriminator,
      'id': msg.author.id
    },
    'user': {
      'name': usr.username,
      'id': usr.id,
    },
    'server': {
      'name': msg.guild.name,
      'id': msg.guild.id,
      'channel': msg.channel.name,
      'channel_id': msg.channel.id
    },
    'reason': rsn,
    'caseid': caseid
  };
  const embed = new Discord.RichEmbed()
              .setColor(3447003)
              .setTimestamp()
              .addField('Action:', 'Warn', true)
              .addField('Reason:', `${rsn}`, true)
              .addField('User:', `${usr.username}#${usr.discriminator} (${usr.id})`, true)
              .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`, true)
              .addField('Warn ID', `${caseid}`, true);

  msg.channel.sendMessage(`${usr} was warned for ${rsn}`);
  usr.sendMessage(`You Have Been Warned In ${msg.guild.name} For ${rsn}`);
  TChannel.sendMessage(`Warn in ${msg.guild.name}`);
  modlog.sendEmbed(embed);
  fs.writeFile("./data/warns.json", JSON.stringify(warns));

};
