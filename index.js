const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareQuintupler) {
    return (function fareQuintupler(number) {
        return number * 5;
    }) 
}

function fareDoubler(number) {
    return number * 2;
}

function fareTripler(number) {
    return number * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    if (func === returnFirstTwoDrivers) {
        return arrayOfDrivers.slice(0, 2);
} else if (func === returnLastTwoDrivers) {
    return arrayOfDrivers.slice(2, 4);
}}
