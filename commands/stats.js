const Discord = require('discord.js');
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
        name: 'Uptime:',
        value: `${client.uptime}`,
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
        name: 'Discord.js:',
        value: `v${Discord.version}`,
        inline: true
      },


    ]

  };

  msg.channel.sendEmbed(embed);
};
