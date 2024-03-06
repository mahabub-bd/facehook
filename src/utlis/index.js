export const getDateDifferenceFromNow = (fromDate) => {
  let difference = new Date().getTime() - new Date(fromDate).getTime();

  difference = difference / 1000;
  let dayDifference = Math.floor(difference / (3600 * 24));
  difference -= dayDifference * 3600 * 24;
  let hourDifference = Math.floor(difference / 3600);
  difference -= hourDifference * 3600;
  let minuteDifference = Math.floor(difference / 60);
  difference -= minuteDifference * 60;

  let message = "";

  if (dayDifference > 0) {
    message += `${dayDifference} day `;
  }

  if (hourDifference > 0) {
    message += `${hourDifference} hour `;
  }

  if (minuteDifference > 0) {
    message += `${minuteDifference} minutes `;
  }

  if (difference > 0) {
    message += `${Math.round(difference)} seconds`;
  }

  return message.trim(); // Trimming to remove any extra whitespace at the end
};
