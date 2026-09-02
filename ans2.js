// Question 2: Bangladesh Weekend Machine 

function getDayType(day) {
    const lowerCaseDay = day.toLowerCase();
    switch (lowerCaseDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

console.log(getDayType("Friday"));
console.log(getDayType("Saturday"));
console.log(getDayType("Sunday"));