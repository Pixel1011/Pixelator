function secondsToString(seconds) {
  var numdays = Math.floor((seconds % 31536000) / 86400);
  var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  var numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);

  var timeString = '';
  if (numdays > 0) {
    timeString += `${numdays} days, `;
  }

  if (numhours > 0) {
    timeString += `${numhours} hours, `;
  }

  if (numminutes > 0) {
    timeString += `${numminutes} minutes, `;
  }

  if (numseconds > 0) {
    timeString += `${numseconds} seconds`;
  }

  return timeString;
}

module.exports = secondsToString;
