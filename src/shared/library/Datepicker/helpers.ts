export const getPlaceHolder = (format: string) => {
  let placeHolder = ''
  if(format) {
    switch (format) {
      case 'MM-DD-YYYY':
        placeHolder = 'Month / Day / Year';
        break;
      case 'YYYY-MM-DD':
        placeHolder = 'Year / Month / Day';
        break;
      case 'DD-MM-YYYY':
        placeHolder = 'Day / Month / Year';
        break;
    }
  } else {
    placeHolder = 'Day / Month / Year';
  }

  return placeHolder;
}

export const getCurrDateFormat = (format: string, date: string) => {
  const months: any = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    "09": 'September',
    '10': 'Octomber',
    '11': 'November',
    '12': 'December',
  }
  
  // print date and show month for user like: 12 / January / 2020
  let currDateForm = '';
  if(format) {
    switch (format) {
      case 'MM-DD-YYYY':
        currDateForm = date.split('-')[0];
        currDateForm = `${months[currDateForm]} / ${date.split('-')[1]} / ${date.split('-')[2]}`
        break;
      case 'YYYY-MM-DD':
        currDateForm = date.split('-')[1];
        currDateForm = `${date.split('-')[0]} / ${months[currDateForm]} / ${date.split('-')[2]}`
        break;
      case 'DD-MM-YYYY':
        currDateForm = date.split('-')[1];
        currDateForm = `${date.split('-')[0]} / ${months[currDateForm]} / ${date.split('-')[2]}`
        break;
    }
  } else {
    currDateForm = date.split('-')[1];
    currDateForm = `${date.split('-')[0]} / ${months[currDateForm]} / ${date.split('-')[2]}`
  }

  return currDateForm;
}