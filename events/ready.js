module.exports = client => {
  const request = require('request');
  const config = require('../config.json');
  var requestBody = {
    server_count: client.guilds.size
  };
  var prefix = '`';

  request.post({
    uri: 'https://bots.discord.pw/api/bots/'+client.user.id+'/stats',
    body: requestBody,
    json: true,
    headers: {
      Authorization: config.dbots
    }
  });


  client.user.setGame(`${prefix}help | On ${client.guilds.size} Servers! | Working On Updates!`);
  console.log('Ready!');
};
