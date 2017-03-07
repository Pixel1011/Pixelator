exports.run = function(client, msg) {
  var TChannel = msg.client.channels.get('275064558740307969');
  var ideas = 'no ideas rip';
  if (msg.author.id == '192372019378126849') {
    var embed = {
      title: 'things',
      color: 3447003,
      fields: [

        {
          name: 'Ideas',
          value: ideas,
          inline: true
        },
      ]

    };
    msg.author.sendEmbed(embed).then(msg => msg).catch(error => TChannel.sendMessage(`AHH TEST COMMAND!!!!!, ${error}`));

    msg.channel.sendMessage('No Command To Test!');
  }else {
    msg.channel.sendMessage('Only The Bot Owner Can Use This Command!').then(msg => msg).catch(error => TChannel.sendMessage(`AHH TEST COMMAND!!!!!, ${error}`));
  }
};
