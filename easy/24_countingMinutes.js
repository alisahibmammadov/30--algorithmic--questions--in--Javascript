export const countingMinutes = (time) => {
  const times = time.split("-");

  let time1 = {};
  let time2 = {};

  time1.meridiem = times[0].slice(-2);
  time1.hour = parseInt(times[0].split(":")[0]);
  time1.minute = parseInt(times[0].slice(-4,-2))

  time2.meridiem = times[1].slice(-2);
  time2.hour = parseInt(times[1].split(":")[0]);
  time2.minute = parseInt(times[1].slice(-4,-2))

  let minutes = 0
  let result = 0 

  if(time1.meridiem === time2.meridiem){
    minutes = (time2.hour*60 + time2.minute) - (time1.hour*60 + time1.minute)
    result = minutes > 0 ? minutes : 24*60 + minutes
  }else{
    minutes = (time2.hour*60 + time2.minute) - (time1.hour*60 + time1.minute)
    result = 12*60 + minutes
  }

  return minutes;
};
