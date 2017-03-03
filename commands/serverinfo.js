const moment = require('moment-timezone');
function humanizeDuration(eventDuration) {

  var eventMDuration = moment.duration(Number(eventDuration), 'seconds');
  var eventDurationString = "";

  if (eventMDuration.years() > 0) {
    var years = moment.duration(eventMDuration.years(), 'years').years();
    eventDurationString += " " + years + (years != 1 ? " years" : " year");
  }
  if (eventMDuration.months() > 0) {
    var months = moment.duration(eventMDuration.months(), 'months').months();
    eventDurationString += " " + months + (months != 1 ? " months" : " month");
  }
  if (eventMDuration.days() > 0) {
    var days = moment.duration(eventMDuration.days(), 'days').days();
    eventDurationString += " " + days + (days != 1 ? " days" : " day");
  }
  if (eventMDuration.hours() > 0) {
    var hours = moment.duration(eventMDuration.hours(), 'hours').hours();
    eventDurationString += " " + hours + (hours != 1 ? " hours" : " hour");
  }
  if (eventMDuration.minutes() > 0) {
    var minutes = moment.duration(eventMDuration.minutes(), 'minutes').minutes();
    eventDurationString += " " + minutes + (minutes != 1 ? " minutes" : " minute");
  }
  return eventDurationString.trim();
};

exports.run = function(client, msg, args, guild) {
if (msg.guild.type === "dm") {
  return msg.channel.sendMessage('This command cannot be used in Dms');
}

offline = [];
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

  var embed = {
    title: `Info about ${msg.guild.name}`,
    color: 0x00f731,
    thumbnail: {
      url: msg.guild.iconURL
    },

    fields: [

      {
        name: 'Name:',
        value: msg.guild.name,
        inline: true
      },
      {
        name: 'ID:',
        value: msg.guild.id,
        inline: true
      },
      {
        name: 'Default Channel:',
        value: `#${msg.guild.defaultChannel.name}`,
        inline: true
      },
      {
        name: 'Region:',
        value: msg.guild.region,
        inline: true
      },
      {
        name: 'Members:',
        value: `${msg.guild.members.size} (Offline: ${offline.length}) (Bots: ${botCount})`,
        inline: true
      },
      {
        name: 'Owner:',
        value: `${msg.guild.owner.user.username}#${msg.guild.owner.user.discriminator}`,
        inline: true
      },
      {
        name: 'Channels',
        value: `${msg.guild.channels.size}(${msg.guild.channels.filter(c => c.type=='text').size} text, ${msg.guild.channels.filter(c => c.type=='voice').size} voice)`,
        inline: true
      },
      {
        name: 'Emojis:',
        value: `${emojis}`,
        inline: true
      },
      {
        name: 'Creation Date:',
        value: `${humanizeDuration(moment().diff(guildCreated, 'seconds'))} ago (${guildCreated.tz('GMT').format("MMMM Do YYYY, h:mm a z")})`,
        inline: true
      },
      {
        name: 'Roles:',
        value: msg.guild.roles.map(r=>r.name).join(', '),
        inline: true
      },
    ]

  };

  msg.channel.sendEmbed(embed).then(msg => msg).catch(error => console.log(`AHH SERVERINFO!!!!!, ${error}`));
};
