describe("fizzBuzz", function() {
    describe("input tests", function () {
        it("random text should return 'Not a number'", function () {
            expect(fizzBuzz("Text")).toBe("Not a number");
        });
        it("15 should return 'FizzBuzz'", function () {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("9 should return 'Fizz'", function () {
            expect(fizzBuzz(9)).toBe("Fizz");
        });
        it("20 should return 'Buzz'", function () {
            expect(fizzBuzz(20)).toBe("Buzz");
        });
        it("2 should return '2'", function () {
            expect(fizzBuzz(2)).toBe(2);
        });
    });
});
