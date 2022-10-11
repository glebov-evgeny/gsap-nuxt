/**
 * Парсинг даты формата "4y-6m-5d" в объект
 */
export default function getParseDate(date) {
  const datesArr = date.split('-');
  const datesArrLen = datesArr.length;
  const datesObj = {};

  for (let i = 0; i < datesArrLen; i += 1) {
    if (datesArr[i].includes('d')) {
      datesObj.days = parseInt(datesArr[i], 10);
    }
    if (datesArr[i].includes('m')) {
      datesObj.months = parseInt(datesArr[i], 10);
    }
    if (datesArr[i].includes('y')) {
      datesObj.years = parseInt(datesArr[i], 10);
    }
  }
  return datesObj;
}
