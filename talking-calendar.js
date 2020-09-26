const talkingCalendar = function(date) {

  //Set out the months to reference
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Extract the sections of the initial string
  let year = date.slice(0,4);
  let month = date.slice(5,7) - 1;
  let day = date.slice(8,10);

  // Set the suffix depending on ending number
  let suffix = ""

  if (day.endsWith('1')) {
    suffix = "st";
  } else if (day.endsWith('2')) {
    suffix = "nd";
  } else if (day.endsWith('3')) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return months[month]+" "+ day + suffix +","+" "+ year
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987