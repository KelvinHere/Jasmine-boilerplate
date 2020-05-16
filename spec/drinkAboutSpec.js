describe("drinkAbout", function() {
    describe("Age submitted test", function () {
        it("minus number should return Sorry. I can’t tell what drink because that age is incorrect!.", function() {
            expect(drinkAbout(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("13 should return Drink Toddy", function() {
            expect(drinkAbout(13)).toBe("Drink Toddy");
        });
        it("14 should return Drink Coke", function() {
            expect(drinkAbout(14)).toBe("Drink Coke");
        });
        it("17 should return Drink Coke", function() {
            expect(drinkAbout(17)).toBe("Drink Coke");
        });
        it("20 should return Drink Beer", function() {
             expect(drinkAbout(20)).toBe("Drink Beer");
        });
        it("129 should return Drink Whisky", function() {
             expect(drinkAbout(129)).toBe("Drink Whisky");
        });
        it("135 should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
             expect(drinkAbout(135)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("random text should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(drinkAbout("banana")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});