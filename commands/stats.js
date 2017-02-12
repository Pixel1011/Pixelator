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
        inline: false
      },
      {
        name: 'Users:',
        value: `${client.guilds.users}`,
        inline: false
      },
      {
        name: 'Servers::',
        value: `${client.guilds.size}`,
        inline: false
      },
      {
        name: 'Channels:',
        value: `${client.channels.size}`,
        inline: false
      },
      {
        name: 'Discord.js:',
        value: `v${Discord.version}`,
        inline: false
      },


    ]

  };

  msg.channel.sendEmbed(embed);
};

exports.help = {
  name: 'stats',
  description: 'shows stats for the bot',
  usage: 'stats'
};
