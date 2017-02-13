module.exports = client => {
  var prefix = '`';
  client.user.setGame(`${prefix}help | On ${client.guilds.size} Servers! | Working On Updates!`);
  console.log('Ready!');
};
