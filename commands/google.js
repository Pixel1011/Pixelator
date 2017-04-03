const Discord = require('discord.js');
exports.run = function(client, msg, args) {
  var google = require('google');
  var argresult = args.join(' ');
  google.resultsPerPage = 15;
  var nextCounter = 0;

  if(argresult.length === 0){
    return msg.channel.sendMessage('Usage: ``google (search)`');
  }

  const embed = new Discord.RichEmbed()
    .setTitle('Google Search:')
    .setDescription('Searching...')
    .setColor(0x00f731);
  msg.channel.sendEmbed(embed).then(m => {

  google(argresult, function (err, res){
    if (err) return console.error(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      const embed2 = new Discord.RichEmbed()
  .setTitle('Google Search:')
  .setAuthor(`${msg.author.username}`, `${msg.author.displayAvatarURL}`)
  .setColor(0x00f731)
  .addField('Result:', link.title + ' - ' + link.href)
  .addField('Description:', link.description + '\n')
  .setTimestamp();

      return m.edit('', {embed: embed2});
    }
  });
  });
};
