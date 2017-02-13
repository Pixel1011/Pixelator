
const main = require('../app.js');
exports.run = function(client, msg, args) {
  let cmd = args.join(' ');
  main.reload(msg, cmd);
};
