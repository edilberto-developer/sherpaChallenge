import { format } from 'date-fns'

export const formatDDMMYYYY = (date) => {
    const dateSub = date.substring(0, 10);
    const dateSplit = dateSub.split('-');
    const dateObject = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2]);
    const formatedDate = format(dateObject, 'dd-MM-yyyy');

    return formatedDate;
}