exports.run = function(bot, msg, args) {
	let modRole = msg.guild.roles.find("name", "Bot Controller");
	if(msg.member.roles.has(modRole.id)) {
		  let msgcount = parseInt(args.join(' '));
		  message.channel.fetchMessages({
		    limit: msgcount
		  }).then(messages => message.channel.bulkDelete(messages));
	msg.channel.sendMessage(`${msgcount} messages were deleted < if that was 1 that will not work`);
} else {
msg.reply("you don't have the permission to use this command.");
}
};

exports.help = {
  name: 'purge',
  description: 'purges X amount of messages',
  usage: 'purge 20'
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
