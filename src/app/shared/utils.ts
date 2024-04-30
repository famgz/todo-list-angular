export function getFormattedDate(today: Date): string {
  const formattedDate = today.toLocaleString('pt-br', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  });
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export function getFormattedHour(today: Date): string {
  return today.toLocaleString('pt-br', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

// HH:MM to current day Date
export function convertStringToDate(timeString: string): Date | null {
  const [hoursStr, minutesStr] = timeString
    .split(':')
    .map((str) => parseInt(str, 10));

  if (isNaN(hoursStr) || isNaN(minutesStr)) {
    return null;
  }

  const now = new Date();
  const dateWithTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hoursStr,
    minutesStr
  );

  return dateWithTime;
}
