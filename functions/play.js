const ytdl = require('ytdl-core');
const search = require('youtube-search');
const config = require('../config.json');
const opts = {
  part: 'snippet',
  maxResults: 10,
  key: config.youtube_api_key
};

function play(msg, queue, song) {
  try {
    if (!msg || !queue) return;
        //if (msg.guild.voiceConnection.channel.members.first() == undefined)
    if (song) {
      search(song, opts, function(err, results) {
        if (err) return msg.channel.sendMessage("Video not found please try to use a youtube link instead.");
        song = (song.includes("https://" || "http://")) ? song : results[0].link;
        let stream = ytdl(song, {
          audioonly: true
        });
        let test;
        if (queue.length === 0) test = true;
        queue.push({
          'title': results[0].title,
          'requested': msg.author.username,
          'toplay': stream
        });
        console.log("Queued " + queue[queue.length - 1].title + " in " + msg.guild.name + " as requested by " + queue[queue.length - 1].requested);
        msg.channel.sendMessage("Queued **" + queue[queue.length - 1].title + "**");
        if (test) {
          setTimeout(function() {
            play(msg, queue);
          }, 1000);
        }
      });
    } else if (queue.length != 0) {
      msg.channel.sendMessage(`Now Playing **${queue[0].title}** | Requested by ***${queue[0].requested}***`);
      console.log(`Playing ${queue[0].title} as requested by ${queue[0].requested} in ${msg.guild.name}`);
      let connection = msg.guild.voiceConnection;
      if (!connection) return console.log("No Connection!");
      var intent = connection.playStream(queue[0].toplay);

      intent.on('error', () => {
        queue.shift();
        play(msg, queue);
      });

      intent.on('end', () => {
        queue.shift();
        play(msg, queue);
      });
    } else {
      let connection = msg.guild.voiceConnection;
      msg.channel.sendMessage('No more music in queue!');
      connection.disconnect();
    }
  } catch (err) {
    console.log(err);
  }
}
module.exports = play;
