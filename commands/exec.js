/*const childProcess = require('child_process');
exports.run = function(client, msg, args){
  var code = (args.join(' '));
  if (msg.author.id !== '192372019378126849') return;
  childProcess.exec(code, { shell: '/bin/bash' }, (err, stdout, stderr) => {
    if (err) return msg.channel.sendCode('', err.msg);
    msg.channel.sendCode('', stdout);
  });
};*/

//NOT WORKING AT ALL
