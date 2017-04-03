const moment = require('moment-timezone');
const humanizeDuration = require('../functions/humanizeDuration.js');
const Discord = require('discord.js');

exports.run = function(client, msg, args, guild) {
if (!msg.guild) {
  return msg.channel.sendMessage('This command cannot be used in Dms');
}

  var offline = [];
  var guildCreated = moment.unix(guild.createdTimestamp/1000);
  var botCount = msg.guild.members.filter(m => m.user.bot == true && m.user.id != client.user.id).size + 1;

  for(member in msg.guild.members.array()) {
       user = msg.guild.members.array()[member];
       if(user.user.presence.status === 'offline') offline.push(user)
  }

  if( !msg.guild.available ) {
    return msg.reply("An error ocurred, please try again");
  }

  var emojis = msg.guild.emojis.map(e => e.name).join(', ');
  if(!emojis){
    emojis = 'None';
  }

  var veri = msg.guild.verificationLevel;
  if(veri == '0') {
    veri = 'None';
  } else if (veri == '1') {
    veri = 'Low';
  } else if (veri == '2') {
    veri = 'Medium';
  } else if (veri == '3') {
    veri = '(╯°□°）╯︵ ┻━┻';
  }


  const embed = new Discord.RichEmbed();
  embed.setTitle(`Info about ${msg.guild.name}`);
  embed.setColor(0x00f731);
  embed.setThumbnail(msg.guild.iconURL);
  embed.addField('Name:', msg.guild.name, true);
  embed.addField('ID', msg.guild.id, true);
  embed.addField('Default Channel:', `#${msg.guild.defaultChannel.name}`, true);
  embed.addField('Region:', msg.guild.region);
  embed.addField('Verification Level:', veri, true);
  embed.addField('Members:', `${msg.guild.members.size} (Offline: ${offline.length}) (Bots: ${botCount})`, true);
  embed.addField('Owner:', `${msg.guild.owner.user.username}#${msg.guild.owner.user.discriminator}`, true);
  embed.addField('Channels:',`${msg.guild.channels.size}(${msg.guild.channels.filter(c => c.type=='text').size} text, ${msg.guild.channels.filter(c => c.type=='voice').size} voice)`, true );
  embed.addField('Emojis:', emojis, true);
  embed.addField('Creation Date:', `${humanizeDuration(moment().diff(guildCreated, 'seconds'))} ago (${guildCreated.tz('GMT').format('MMMM Do YYYY, h:mm a z')})`);
  embed.addField('Roles:', msg.guild.roles.map(r =>r.name).join(', '), true);


  msg.channel.sendEmbed(embed).then(msg => msg).catch(error => console.log(`AHH SERVERINFO!!!!!, ${error}`));
};
