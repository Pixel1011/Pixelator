const main = require('../Pixel.js');
exports.run = function(bot, msg, args) {
	let cmd = args.join(' ');
	main.reload(msg, cmd);
};

exports.help = {
  name: 'reload',
  description: 'Reloads the command file, if it\'s been updated or modified.',
  usage: 'reload <commandname>'
};
