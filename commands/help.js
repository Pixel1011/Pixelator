exports.run = function(client, msg, args) {
  var cmd = args.join(' ');
  if (!cmd) {
    var embed = {
      title: 'Pixelator Commands',
      color: 3447003,
      thumbnail: {
        url: msg.client.user.avatarURL
      },
      footer: {
        text: 'Use `help (command) For More Info'
      },
      fields: [

        {
          name: 'Commands',
          value: 'add\nauthor\nban\ndivide\nlmgfty\nhelp\nhi\ninvite\nkick\nmultiply\nmurder\nnuke\nping\npurge\nreload\nrestart\nserverinfo\nstats\nsubtract\nvjoin\nvleave\nmute\nroll\nuserinfo\nbugreport\nplay\naddmusic\npause\nresume\nskip\nstop\nqueue\nurban\ngoogle\nwarn\nfindwarn\ndelwarn\nnp\ncat\nascii',
          inline: true
        },
        {
          name: 'Offical Server:',
          value: '[Discord Server](https://discord.gg/3wHfMu6)',
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
        description: `Description: Sends A bug Report to staff and if it is important staff will join
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
        description: `Description: A Command That googles Things
        usage: google (search)`
      };
      return msg.channel.sendEmbed(embed6);
    } else
    if(cmd == 'help') {
      var embed7 = {
        title: 'Command: help',
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
    if(cmd == 'ping') {
      var embed16 = {
        title: 'Command: ping',
        description: `Description: Check Pixelator's Response Time
        usage: ping`
      };
      return msg.channel.sendEmbed(embed16);
    } else
    if(cmd == 'purge') {
      var embed17 = {
        title: 'Command: purge',
        description: `Description: Deletes The X Amount Of Messages from 1-100
        usage: purge 100`
      };
      return msg.channel.sendEmbed(embed17);
    } else
    if(cmd == 'roll') {
      var embed18 = {
        title: 'Command: roll',
        description: `Description: Rolls A Number Between 1 And X
        usage: roll (number)`
      };
      return msg.channel.sendEmbed(embed18);
    } else
    if(cmd == 'rps') {
      var embed19 = {
        title: 'Command: rps',
        description: `Description: Play Rock Paper Scissors With The Pixelator
        usage: rps (choice)`
      };
      return msg.channel.sendEmbed(embed19);
    } else
    if(cmd == 'serverinfo') {
      var embed20 = {
        title: 'Command: serverinfo',
        description: `Description: Shows You info About the Server
        usage: serverinfo`
      };
      return msg.channel.sendEmbed(embed20);
    } else
    if(cmd == 'stats') {
      var embed21 = {
        title: 'Command: stats',
        description: `Description: Shows You stats for Pixelator
        usage: stats`
      };
      return msg.channel.sendEmbed(embed21);
    } else
    if(cmd == 'subtract') {
      var embed22 = {
        title: 'Command: subtract',
        description: `Description: Subtracts Numbers
        usage: subtract 1 1`
      };
      return msg.channel.sendEmbed(embed22);
    } else
    if(cmd == 'unmute') {
      var embed23 = {
        title: 'Command: unmute',
        description: `Description: Unmutes A User With The Muted role
        usage: unmute @Pixel`
      };
      return msg.channel.sendEmbed(embed23);
    } else
    if(cmd == 'userinfo') {
      var embed24 = {
        title: 'Command: userinfo',
        description: `Description: Shows Info About A User
        usage: userinfo @Pixel`
      };
      return msg.channel.sendEmbed(embed24);
    } else
    if(cmd == 'vjoin') {
      var embed25 = {
        title: 'Command: vjoin',
        description: `Description: Makes The Bot Join Your Voice Channel
        usage: vjoin`
      };
      return msg.channel.sendEmbed(embed25);
    } else
    if(cmd == 'vleave') {
      var embed26 = {
        title: 'Command:vleave',
        description: `Description: Makes The Bot Leave Your Voice Channel
        usage: vleave`
      };
      return msg.channel.sendEmbed(embed26);
    } else
    if(cmd == 'addmusic') {
      var embed27 = {
        title: 'Command: addmusic',
        description: `Description: Add some Music To The queue
        usage: addmusic (youtube link)`
      };
      return msg.channel.sendEmbed(embed27);
    } else
    if(cmd == 'play') {
      var embed28 = {
        title: 'Command: play',
        description: `Description: play music in the queue
        usage: play`
      };
      return msg.channel.sendEmbed(embed28);
    } else
    if(cmd == 'pause') {
      var embed29 = {
        title: 'Command: pause',
        description: `Description: pauses the current music playing
        usage: pause`
      };
      return msg.channel.sendEmbed(embed29);
    } else
    if(cmd == 'resume') {
      var embed30 = {
        title: 'Command: resume',
        description: `Description: resume the paused video
        usage: resume`
      };
      return msg.channel.sendEmbed(embed30);
    } else
    if(cmd == 'skip') {
      var embed31 = {
        title: 'Command: skip',
        description: `Description: skips the current video playing
        usage: skip`
      };
      return msg.channel.sendEmbed(embed31);
    } else
    if(cmd == 'stop') {
      var embed32 = {
        title: 'Command: stop',
        description: `Description: clears the queue and stops music
        usage: stop`
      };
      return msg.channel.sendEmbed(embed32);
    } else
    if(cmd == 'queue') {
      var embed33 = {
        title: 'Command: queue',
        description: `Description: Shows You The Music queue
        usage: queue`
      };
      return msg.channel.sendEmbed(embed33);
    } else
    if(cmd == 'urban') {
      var embed34 = {
        title: 'Command: urban',
        description: `Description: Defines words from the Urban Dictionary
        usage: urban (word to define)`
      };
      return msg.channel.sendEmbed(embed34);
    } else
    if(cmd == 'lmgfty') {
      var embed35 = {
        title: 'Command: lmgfty',
        description: `Description: Googles Things using lmgfty
        usage: urban (word to define)`
      };
      return msg.channel.sendEmbed(embed35);
    } else
    if(cmd == 'warn') {
      var embed36 = {
        title: 'Command: Warn',
        description: `Description: Warns The @mentioned user
        usage: warn @Pixel`
      };
      return msg.channel.sendEmbed(embed36);
    } else
    if(cmd == 'findwarn') {
      var embed37 = {
        title: 'Command: findwarn',
        description: `Description: finds The Warns Of The @mentioned user
        usage: findwarn @Pixel`
      };
      return msg.channel.sendEmbed(embed37);
    } else
    if(cmd == 'delwarn') {
      var embed38 = {
        title: 'Command: delwarn',
        description: `Description: Deletes A Warn From The @mentioned user
        usage: delwarn @Pixel`
      };
      return msg.channel.sendEmbed(embed38);
    } else
    if(cmd == 'np') {
      var embed39 = {
        title: 'Command: np',
        description: `Description: Shows The Current Music Playing
        usage: np`
      };
      return msg.channel.sendEmbed(embed39);
    } else
    if(cmd == 'cat') {
      var embed40 = {
        title: 'Command: cat',
        description: `Description: Gets A Random gif Or png Of A Cat
        usage: cat`
      };
      return msg.channel.sendEmbed(embed40);
    } else
    if(cmd == 'ascii') {
      var embed41 = {
        title: 'Command: ascii',
        description: `Description: Generates acii Art From Given Text
        usage: acii (text)`
      };
      return msg.channel.sendEmbed(embed41);
    } else

    msg.channel.sendMessage(`There is No Command Called ${cmd}`);
  }
};
