exports.run = function(client, msg) {
  msg.channel.sendMessage('here you go! https://discordapp.com/oauth2/authorize?permissions=8&scope=bot&client_id=253915933276504064').catch(console.error);
};
