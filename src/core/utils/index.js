import moment from "moment";

export const calculateSumOfNumbers = (arrayWithAmounts) => {
    let numbers = [];
    arrayWithAmounts.forEach((amountObj) => {
        numbers.push(amountObj.amount);
    });
    
    return numbers.reduce((acc, number) => {
        return acc + number;
    }, 0);
}

export const getFormatedDate = (date) => {
    moment(date).format('MMMM Do YYYY, h:mm:ss a');
}