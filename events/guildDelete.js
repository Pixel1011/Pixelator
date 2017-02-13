module.exports = (guild, client) => {
  var testChannel = client.channels.get('257924189690789888');
  let embedData = {
    color:0x09f969,
    title: `Guild Delete: ${guild.name} (ID: ${guild.id})`,
    description: `Owner: ${guild.owner.user.username}#${guild.owner.user.discriminator} (ID: ${guild.owner.id})`,
    footer: {
      text: `Now in ${client.guilds.size} guilds.`
    }
  };
  testChannel.sendMessage('', { embed: embedData });
};
