exports.run = function(bot, msg) {
  msg.author.sendMessage('Pixel! Links: YT: https://www.youtube.com/channel/UCHuwdF02GiY98f8yIIRrBjg Twitter: https://twitter.com/PixelplaysMCGM Discord for help https://discord.gg/7xmdtZu').catch(console.error);
  msg.reply('Check Your DMs!');
};

exports.help = {
  name: 'author',
  description: 'shows the author of the bot',
  usage: 'author'
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
