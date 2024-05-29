enum EHour {
  second = 3600,
  minute = 60,
  day = 24,
}

const hourToSeconds = (hour: number) => {
  return hour * EHour.second;
};

const hourToMinute = (hour: number) => {
  return hour * EHour.minute;
};

const hourToDay = (day: number) => {
  return day / EHour.day;
};
