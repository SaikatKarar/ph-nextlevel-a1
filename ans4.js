// Question 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 0;
    if (distance <= 2) {
        fare = 50;
    } else {
        fare = 50 + (distance - 2) * 15;
    }
    fare += waitingMinutes * 2;
    if (isNight) {
        fare *= 1.20;
    }

    return fare;
}


console.log(getCngFare(1));
console.log(getCngFare(3));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));