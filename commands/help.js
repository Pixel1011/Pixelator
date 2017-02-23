exports.run = function(client, msg) {
  var embed = {
    title: 'Pixelator Commands',
    color: 3447003,
    thumbnail: {
      url: msg.client.user.avatarURL
    },

    fields: [

      {
        name: 'Commands',
        value: 'add\nauthor\nban\ndivide\ngoogle\nhelp\nhi\ninvite\nkick\nmultiply\nmurder\nnuke\nping\npurge\nreload\nrestart\nserverinfo\nstats\nsubtract\nvjoin\nvleave\nmute\nroll\nuserinfo',
        inline: true
      },
      {
        name: 'Offical Server:',
        value: '[Discord Server](https://discord.gg/7xmdtZu)',
        inline: false
      },


    ]

  };

  msg.reply('Help Incoming Check Your DMs!').catch(console.log);
  msg.author.sendEmbed(embed).then(msg => msg).catch(error => console.log(`AHH HELP COMMAND!!!!!, ${error}`));
};
