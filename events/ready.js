module.exports = client => {
  const request = require('request');
  const settings = require('./settings.json');
  var requestBody = {
    server_count: client.guilds.size
  };

  request.post({
    uri: "https://bots.discord.pw/api/bots/"+client.user.id+"/stats",
    body: requestBody,
    json: true,
    headers: {
      Authorization: settings.dbots
    }
  });
  var prefix = '`';
  client.user.setGame(`${prefix}help | On ${client.guilds.size} Servers! | Working On Updates!`);
  console.log('Ready!');
};
