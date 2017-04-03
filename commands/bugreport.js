const Discord = require('discord.js');
exports.run = (client, msg, args) => {
  var bug = args.join(' ');

  if (!msg.guild) {
    return msg.channel.sendMessage('This command cannot be used in Dms');
  }

  if(!msg.guild.member(client.user).hasPermission('CREATE_INSTANT_INVITE')) {
    return msg.reply('I dont have the permissions to Create invites!');
  }
  if(!bug) {
    return msg.channel.sendMessage('You Must Say What The Bug Is');
  }

  client.guilds.get(msg.guild.id).defaultChannel.createInvite().then(invite => {

    const embed = new Discord.RichEmbed();
    embed.setTitle('Bug Report:');
    embed.setColor(0xdb0000);
    embed.setTimestamp();
    embed.addField('Report:', `${bug}`, true);
    embed.addField('Reporter:', `${msg.author.username}#${msg.author.discriminator}`, true);
    embed.addField('Guild:', `${msg.guild.name}(${msg.guild.id})`, true);
    embed.addField('Invite:', `https://discord.gg/${invite.code}`, true);

    client.channels.get('286175546499661824').sendEmbed(embed);

    msg.channel.sendMessage('Thank You For Reporting this bug. If You Have Any Questions Please Join Pixelator\'s server https://discord.gg/3wHfMu6');
  });
};
