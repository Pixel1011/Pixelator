exports.run = function(client, msg, args) {
  if (msg.author.id !== '192372019378126849') {
    return msg.channel.sendMessage('This Command Is Currently Under Maintenance. Please Try Again Later');
  }
  var cmd = args.join(' ');
  if (!cmd) {
  var embed = {
    title: 'Pixelator Commands',
    color: 3447003,
    thumbnail: {
      url: msg.client.user.avatarURL
    },

    fields: [

      {
        name: 'Commands',
        value: 'add\nauthor\nban\ndivide\ngoogle\nhelp\nhi\ninvite\nkick\nmultiply\nmurder\nnuke\nping\npurge\nreload\nrestart\nserverinfo\nstats\nsubtract\nvjoin\nvleave\nmute\nroll\nuserinfo\nbugreport',
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
  } else {
    if(cmd == 'add') {
      var embed1 = {
        title: 'Command: add',
        description: `Description: A Command That Can Add Numbers
        usage: add 2 2`
      };
      return msg.channel.sendEmbed(embed1);
    } else
    if(cmd == 'author') {
      var embed2 = {
        title: 'Command: author',
        description: `Description: Shows You Who Created or Helped Code Pixelator
        usage: author`
      };
      return msg.channel.sendEmbed(embed2);
    } else
    if(cmd == 'ban') {
      var embed3 = {
        title: 'Command: ban',
        description: `Description: Bans The @mentioned user
        usage: ban @Pixel (reason)`
      };
      return msg.channel.sendEmbed(embed3);
    } else
    if(cmd == 'bugreport') {
      var embed4 = {
        title: 'Command: bugreport',
        description: `Description: Sends A bug Report to me
        usage: bugreport (report)`
      };
      return msg.channel.sendEmbed(embed4);
    } else
    if(cmd == 'divide') {
      var embed5 = {
        title: 'Command: divide',
        description: `Description: A Command That Can Divide Numbers
        usage: divide 1 1`
      };
      return msg.channel.sendEmbed(embed5);
    } else
    if(cmd == 'google') {
      var embed6 = {
        title: 'Command: google',
        description: `Description: A Command That uses lmgfty to google
        usage: google (text)`
      };
      return msg.channel.sendEmbed(embed6);
    } else
    if(cmd == 'help') {
      var embed7 = {
        title: 'Command: google',
        description: `Description: Shows You All The Commands For This Bot
        usage: help (cmd)`
      };
      return msg.channel.sendEmbed(embed7);
    } else
    if(cmd == 'hi') {
      var embed8 = {
        title: 'Command: hi',
        description: `Description: Say Hi To The Bot!
        usage: hi`
      };
      return msg.channel.sendEmbed(embed8);
    } else
    if(cmd == 'invite') {
      var embed9 = {
        title: 'Command: invite',
        description: `Description: Shows You All The Commands For This Bot
        usage: help (cmd)`
      };
      return msg.channel.sendEmbed(embed9);
    } else
    if(cmd == 'kick') {
      var embed10 = {
        title: 'Command: kick',
        description: `Description: Kicks The @mentioned User
        usage: kick @Pixel (reason)`
      };
      return msg.channel.sendEmbed(embed10);
    } else
    if(cmd == 'lockdown') {
      var embed11 = {
        title: 'Command: lockdown',
        description: `Description: A Command That Locks Down The Channel For X Amount of time
        usage: lockdown 20m or lockdown release/unlock`
      };
      return msg.channel.sendEmbed(embed11);
    } else
    if(cmd == 'multiply') {
      var embed12 = {
        title: 'Command: multiply',
        description: `Description: A Command That Multiplys Numbers
        usage: multiply 1 2`
      };
      return msg.channel.sendEmbed(embed12);
    } else
    if(cmd == 'murder') {
      var embed13 = {
        title: 'Command: murder',
        description: `Description: Murder Someone
        usage: murder Pixel`
      };
      return msg.channel.sendEmbed(embed13);
    } else
    if(cmd == 'mute') {
      var embed14 = {
        title: 'Command: mute',
        description: `Description: Mutes The @mentioned user
        usage: mute @Pixel (reason)`
      };
      return msg.channel.sendEmbed(embed14);
    } else
    if(cmd == 'nuke') {
      var embed15 = {
        title: 'Command: nuke',
        description: `Description: Nuke a user
        usage: nuke Pixel`
      };
      return msg.channel.sendEmbed(embed15);
    } else
    msg.channel.sendMessage(`There is No Command Called ${cmd}`);
  }
};
