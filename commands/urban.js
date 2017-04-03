exports.run = function(client, msg, args) {
  const request = require('request');
  var search = args.join(' ');
  if (search.length == 0) {
    msg.channel.sendMessage(`\`urban: Defines words from the Urban Dictionary.\nUsage: \`urban (word to define)`);

  } else {

    var url = `http://api.urbandictionary.com/v0/define?term=${search}`;

    request(url, (error, result, body) => {
      try {
        var urban = JSON.parse(body);
        var urbanEmbed = {
          color: 0x00f731,
          author: {
            name: `Top definition for ${urban.list[0].word}`,
            url: urban.list[0].permalink,
            icon_url: "https://images.discordapp.net/.eJwFwVEOgyAMANC7cAA6YFDrbQgSNFNKaI0fy-6-977mnqdZza46ZAXYDik8NyvKM7dqG3M7ax6H2MIXZNVc9qt2FfAhBI-B8EURQ_SUwCfCRC6i80tySMsb7v7p_HQ7ejO_PwphIvs.kjWsAKclpyOeMTEoes0rz4fyFO4?width=300&height=300"
          },
          description: urban.list[0].definition,
          fields: [{
            name: ":thumbsup:",
            value: urban.list[0].thumbs_up,
            inline: true
          },
          {
            name: ":thumbsdown:",
            value: urban.list[0].thumbs_down,
            inline: true
          },
          {
            name: "Defined By",
            value: urban.list[0].author,
            inline: false
          }
          ],
          thumbnail: {
            url: "https://images.discordapp.net/.eJwFwVEOgyAMANC7cAA6YFDrbQgSNFNKaI0fy-6-977mnqdZza46ZAXYDik8NyvKM7dqG3M7ax6H2MIXZNVc9qt2FfAhBI-B8EURQ_SUwCfCRC6i80tySMsb7v7p_HQ7ejO_PwphIvs.kjWsAKclpyOeMTEoes0rz4fyFO4?width=300&height=300"
          }
        };
        msg.channel.sendEmbed(urbanEmbed);
      } catch (error) {
        console.log('Error on urban\n' + error + '\nsearch:\n' + search);
        msg.channel.sendEmbed({
          title: 'Error',
          description: `There isn't a definition for **${search}** yet.`,
          color: 0x00f731
        });
      }
    });
  }
};
