function drinkAbout(age) {
    if (typeof(age) != "number") {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }

    switch(true) {
        case (age < 0 || age >= 130): return "Sorry. I can’t tell what drink because that age is incorrect!";
        case (age < 14): return "Drink Toddy";
        case (age < 18): return "Drink Coke";
        case (age < 21): return "Drink Beer";
        case (age < 130): return "Drink Whisky";
    }
}

