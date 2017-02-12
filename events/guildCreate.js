module.exports = (guild, client) => {
  var testChannel = client.channels.get('257924189690789888');

      if (testChannel) {
        let BotCount = guild.members.filter(m => m.user.client == true && m.user.id != client.user.id).size;
        let embedData = {
        color:0x09f969 ,
      title: `Guild Create: ${guild.name} (ID: ${guild.id})`,
      description: `Owner: ${guild.owner.user.username}#${guild.owner.user.discriminator} (ID: ${guild.owner.id})
      Members: ${guild.memberCount}
      Bots: ${BotCount} (${Math.floor((BotCount/guild.memberCount)*100)}%)`,
        footer: {
          text: `Now in ${client.guilds.size} guilds.`
        }
        };
        testChannel.sendMessage('', { embed: embedData });
      }
};
