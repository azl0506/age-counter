function birthdayCalculation() {
  const year  = parseInt(document.getElementById('year').value);
  const month = parseInt(document.getElementById('month').value);
  const day   = parseInt(document.getElementById('day').value);

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let birthYear  = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth();
  let birthDay   = birthDate.getDate();

  let currentYear  = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDay   = today.getDate();

  let ageYear = currentYear - birthYear;

  let ageMonth;
  if (currentMonth >= birthMonth) {
    ageMonth = currentMonth - birthMonth;
  } else {
    ageMonth = (12 - birthMonth) + currentMonth;
    ageYear -= 1;
  }

  let ageDay = currentDay - birthDay;
  if (ageDay < 0) {
    const prevMonth = new Date(currentYear, currentMonth, 0);
    ageDay += prevMonth.getDate();
    ageMonth -= 1;
    if (ageMonth < 0) {
      ageMonth += 12;
      ageYear -= 1;
    }
  }

  document.getElementById('output').innerHTML =
    `You are ${ageYear} years, ${ageMonth} months, and ${ageDay} day(s) old.`;
}