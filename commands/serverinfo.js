exports.run = function(client, msg, args, guild) {
offline = [];

  for(member in msg.guild.members.array()) {
       user = msg.guild.members.array()[member];
       if(user.user.presence.status === 'offline') offline.push(user)
  }

  if( !msg.guild.available ) {
    return msg.reply("An error ocurred, please try again");
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
        name: 'Creation Date:',
        value: msg.guild.createdAt,
        inline: true
      },
      {
        name: 'Region:',
        value: msg.guild.region,
        inline: true
      },
      {
        name: 'Members:',
        value: `${msg.guild.members.size} (Offline: ${offline.length})`,
        inline: true
      },
      {
        name: 'Owner:',
        value: `${msg.guild.owner.user.username}#${msg.guild.owner.user.discriminator}`,
        inline: true
      },
      {
        name: 'Channels',
        value: msg.guild.channels.size,
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
