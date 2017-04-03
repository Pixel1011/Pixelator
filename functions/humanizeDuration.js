function humanizeDuration(eventDuration) {
  const moment = require('moment-timezone');

  var eventMDuration = moment.duration(Number(eventDuration), 'seconds');
  var eventDurationString = "";

  if (eventMDuration.years() > 0) {
    var years = moment.duration(eventMDuration.years(), 'years').years();
    eventDurationString += " " + years + (years != 1 ? " years" : " year");
  }
  if (eventMDuration.months() > 0) {
    var months = moment.duration(eventMDuration.months(), 'months').months();
    eventDurationString += " " + months + (months != 1 ? " months" : " month");
  }
  if (eventMDuration.days() > 0) {
    var days = moment.duration(eventMDuration.days(), 'days').days();
    eventDurationString += " " + days + (days != 1 ? " days" : " day");
  }
  if (eventMDuration.hours() > 0) {
    var hours = moment.duration(eventMDuration.hours(), 'hours').hours();
    eventDurationString += " " + hours + (hours != 1 ? " hours" : " hour");
  }
  if (eventMDuration.minutes() > 0) {
    var minutes = moment.duration(eventMDuration.minutes(), 'minutes').minutes();
    eventDurationString += " " + minutes + (minutes != 1 ? " minutes" : " minute");
  }
  return eventDurationString.trim();
};

module.exports = humanizeDuration;
