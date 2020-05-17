function fizzBuzz(numIn) {
    if (typeof(numIn) != "number") {
        return "Not a number"
    }

    if (numIn % 3 == 0 && numIn % 5 == 0) {
        return "FizzBuzz";
    } else if (numIn % 3 == 0) {
        return "Fizz";
    } else if(numIn % 5 == 0) {
        return "Buzz";
    } else {
        return numIn
    }
}