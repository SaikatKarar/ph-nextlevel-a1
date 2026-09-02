// Question 1: Value Detective 

function describeValue(value) {
    const type = typeof value;
    let truthyorfalsy;
    if (value) {
        truthyorfalsy = "truthy";
    } else {
        truthyorfalsy = "falsy";
    }

    return `${type} || ${truthyorfalsy}`;
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(0));
console.log(describeValue(1));
console.log(describeValue(true));
console.log(describeValue(false));
console.log(describeValue(null));
console.log(describeValue(undefined));