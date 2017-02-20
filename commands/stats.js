const Discord = require('discord.js');
const secondsToString = (seconds) => {
  var numdays = Math.floor((seconds % 31536000) / 86400);
  var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  var numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);

  var timeString = '';
  if (numdays > 0) {
    timeString += `${numdays} days, `;
  }

  if (numhours > 0) {
    timeString += `${numhours} hours, `;
  }

  if (numminutes > 0) {
    timeString += `${numminutes} minutes, `;
  }

  if (numseconds > 0) {
    timeString += `${numseconds} seconds`;
  }

  return timeString;
};

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
        name: 'Uptime:',
        value: `${secondsToString(client.uptime/1000)}`,
        inline: true
      },


    ]

  };

  msg.channel.sendEmbed(embed);
};
