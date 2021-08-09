import moment from "moment";

export const calculateSumOfNumbers = (arrayWithObjs) => {
    let numbers = [];
    arrayWithObjs.forEach((amountObj) => {
        numbers.push(amountObj.amount);
    });
    
    return numbers.reduce((acc, number) => {
        return acc + number;
    }, 0);
}

export const getFormatedDate = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}