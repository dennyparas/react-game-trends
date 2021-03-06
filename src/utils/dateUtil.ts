export function formatDate(date: Date): string {
  return new Date(date).toISOString().replace(/T.*/, "").split("-").join("-");
}

export function addSubtractMonths(date: Date, months: number): string {
  const d = date.getDate();
  date.setMonth(date.getMonth() + +months);
  if (date.getDate() !== d) {
    date.setDate(0);
  }
  return formatDate(date);
}

export function startDayOfTheYear(): string {
  const day = `${new Date().getFullYear()}-01-01`;

  return day;
}

export function endDayOfTheYear(): string {
  const day = `${new Date().getFullYear()}-12-31`;

  return day;
}

export function setArrayOfYears() {
  const currentYear = new Date().getFullYear() + 1;
  const min = 1950;
  let years = [];

  for (let i = currentYear; i >= min; i--) {
    years.push(i);
  }
  return years;
}
