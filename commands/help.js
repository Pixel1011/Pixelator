//exports.run = function(bot, msg, args) {
const settings = require('../settings.json');
/*var embed = {
  title: `Pixelator Commands`,
color: 3447003,
  thumbnail: {
  url: msg.client.user.avatarURL
  },

  fields: [

    {
      name: 'Commands',
      value: "help\ninvite\nhi\nauthor\nkick\nban\nadd\nping\npurge\nsubtract\nmultiply\ndivide\nvjoin\nvleave\ninfo\nserverinfo\nmurder",
      inline: true
    },
    {
      name: 'Offical Server:',
      value: "[Discord Server](https://discord.gg/7xmdtZu)",
      inline: false
    },


  ]

}

msg.reply("Help Incoming Check Your DMs!").catch(console.log);
msg.author.sendEmbed(embed).then(msg => msg).catch(error => console.log(`AHH HELP COMMAND!!!!!, ${error}`))
};*/
exports.run = (bot, msg, args) => {
  const commandNames = Array.from(msg.client.commands.keys());
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  if (!args[0]) {
    var embed = {
      title: 'Pixelator Commands',
      color: 3447003,
      thumbnail: {
        url: msg.client.user.avatarURL
      },

      fields: [

        {
          name: 'Commands',
          value: msg.client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n'),
          inline: true
        },
        {
          name: 'Offical Server:',
          value: '[Discord Server](https://discord.gg/7xmdtZu)',
          inline: false
        },


      ]
    };

    msg.channel.sendEmbed(embed);
  } else {
    let command = args[0];
    if (bot.commands.has(command)) {
      command = bot.commands.get(command);
      var helpEmbed = {
        title: 'Pixelator Commands',
        color: 3447003,
        fields: [
          {
            name: 'Commands',
            value: msg.client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n'),
            inline: true
          },
        ]
      };
      msg.channel.sendEmbed(helpEmbed);
    }
  }
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help (command)'
};
