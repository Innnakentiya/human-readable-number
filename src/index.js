module.exports = function toReadable(num) {
    let numUpToNineteen = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let numDozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let numHundreds = "hundred";
    let newNum = "";

    if (num < 20) {
        newNum = numUpToNineteen[num];
    } else if (num >= 20 && num < 100 && num % 10 === 0) {
        newNum = numDozens[num / 10];
    } else if (num < 100 && num % 10 !== 0) {
        let restOfNum = num % 10;
        newNum =
            numDozens[Math.floor(num / 10)] + " " + numUpToNineteen[restOfNum];
    } else if (num >= 100 && num < 1000) {
        if (num % 100 === 0) {
            newNum = numUpToNineteen[Math.floor(num / 100)] + " " + numHundreds;
        } else if (num % 100 !== 0) {
            let restOfNum = num % 100;
            if (restOfNum < 20) {
                newNum =
                    numUpToNineteen[Math.floor(num / 100)] +
                    " " +
                    numHundreds +
                    " " +
                    numUpToNineteen[restOfNum];
            } else if (restOfNum >= 20 && restOfNum < 100) {
                if (restOfNum % 10 === 0) {
                    newNum =
                        numUpToNineteen[Math.floor(num / 100)] +
                        " " +
                        numHundreds +
                        " " +
                        numDozens[Math.floor(restOfNum / 10)];
                } else if (restOfNum % 10 !== 0) {
                    newNum =
                        numUpToNineteen[Math.floor(num / 100)] +
                        " " +
                        numHundreds +
                        " " +
                        numDozens[Math.floor(restOfNum / 10)] +
                        " " +
                        numUpToNineteen[restOfNum % 10];
                }
            }
        }
    }
    return newNum;
};
