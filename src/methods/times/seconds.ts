enum ESeconds {
  minute = 60,
  hour = 3600,
  day = 86400,
}

const getSecondsToMinutes = (seconds: number) => {
  const minutes: number = Math.floor(seconds / ESeconds.minute);
  const remainSeconds: number = seconds - minutes * ESeconds.minute;
  return minutes;
};
const getSecondsToHour = (seconds: number) => {
  const hour: number = Math.floor(seconds / ESeconds.hour);
  const remainingSeconds: number = seconds % ESeconds.hour;
  const minutes = Math.floor(remainingSeconds / ESeconds.minute);
  const remainingSecondsAfterMinutes = remainingSeconds % ESeconds.minute;
  return hour;
};
const getSecondsToDays = (seconds: number) => {
  const days = Math.floor(seconds / ESeconds.day);
  const remainingSeconds = seconds % ESeconds.day;
  const hours = Math.floor(remainingSeconds / ESeconds.hour);
  const remainingSecondsAfterHours = remainingSeconds % ESeconds.hour;
  const minutes = Math.floor(remainingSecondsAfterHours / ESeconds.minute);
  const remainingSecondsAfterMinutes =
    remainingSecondsAfterHours % ESeconds.minute;
  return days;
};
