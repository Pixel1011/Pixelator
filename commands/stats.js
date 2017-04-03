const Discord = require('discord.js');
const secondsToString = require('../functions/secondsToString.js');

exports.run = (client, msg = []) => {
  var embed = {
    title: 'Stats:',
    color: 3447003,
    fields: [

      {
        name: 'Mem Usage:',
        value: `${process.memoryUsage().rss/1024/1024} MB`,
        inline: true
      },
      {
        name: 'Discord.js:',
        value: `v${Discord.version}`,
        inline: true
      },
      {
        name: 'Users:',
        value: `${client.users.size}`,
        inline: true
      },
      {
        name: 'Servers:',
        value: `${client.guilds.size}`,
        inline: true
      },
      {
        name: 'Channels:',
        value: `${client.channels.size}`,
        inline: true
      },
      {
        name: 'VoiceConnections',
        value: `${client.voiceConnections.size}`,
        inline: true
      },
      {
        name: 'Uptime:',
        value: `${secondsToString(client.uptime/1000)}`,
        inline: true
      },


    ]

  };

  msg.channel.sendEmbed(embed);
};
