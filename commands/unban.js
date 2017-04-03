
  const Discord = require('discord.js');
  exports.run = (client, msg, args) => {
    let reason = args.slice(1).join(' ');
    let user = args[0];
    let modlog = msg.guild.channels.find('name', 'modlog');
    let embeduser = client.users.get(user);
    if (!modlog) return msg.channel.sendMessage('I cannot find a modlog channel');
    if (reason.length < 1) return msg.channel.sendMessage('You must supply a reason for the unban.');
    if (!user) return msg.channel.sendMessage('You must supply a User Resolvable, such as a user id.');
    const embed = new Discord.RichEmbed()
      .setColor(3447003)
      .setTimestamp()
      .addField('Action:', 'unban', true)
      .addField('Reason:', `${reason}`, true)
      .addField('User:', `${embeduser.username}#${embeduser.discriminator} (${user})`, true)
      .addField('Moderator:', `${msg.author.username}#${msg.author.discriminator}`, true);
    client.channels.get(modlog.id).sendEmbed(embed);
    return msg.guild.unban(user).then(msg.channel.sendMessage(`Successfully Unbanned ${embeduser.username}#${embeduser.discriminator}`));
  };
