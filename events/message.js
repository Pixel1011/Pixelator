const settings = require('../settings.json');
module.exports = msg => {
  if (!msg.content.startsWith(settings.prefix)) return;
  if (msg.content.startsWith('```')) return;
  if (msg.content.startsWith('``')) return;
  if (msg.author.bot) return;

  const client = msg.client;
  const LogChannel = client.channels.get('257924189690789888');
  const ErrorChannel = client.channels.get('275064558740307969');
  const args = msg.content.split(' ');
  const command = args.shift().slice(settings.prefix.length);


  try {
    let cmdFile = require(`../commands/${command}`);
    cmdFile.run(client, msg, args, LogChannel, ErrorChannel);
  } catch (err) {
    console.log(`Command ${command} failed\n${err.stack}`);
  }
};
