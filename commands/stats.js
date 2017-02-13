const Discord = require('discord.js');
exports.run = (client, msg = []) => {
  var embed = {
    title: 'Stats:',
    color: 3447003,
    fields: [

      {
        name: 'Mem Usage:',
        value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
        inline: true
      },
      {
        name: 'Uptime:',
        value: `${client.uptime}`,
        inline: true
      },
      {
        name: 'Users:',
        value: `${client.guilds.users}`,
        inline: true
      },
      {
        name: 'Servers::',
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
