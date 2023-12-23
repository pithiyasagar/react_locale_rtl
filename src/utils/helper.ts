import moment from 'moment';

const DATE_FORMAT = 'MMMM DD, yyyy';

const getFormattedDate = (value: string) => {
  return moment(Date(value)).format(DATE_FORMAT);
};

export default getFormattedDate;
