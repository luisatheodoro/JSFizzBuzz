describe("FizzBuzz", function(){
    var fizzbuzz;

    beforeEach(function() {
       fizzbuzz = new FizzBuzz();
    });

    it("should return Fizz when passing the number 3", function(){
      expect(fizzbuzz.convert(3)).toEqual("Fizz");
    });

    it("should return Fizz when passing the number ", function(){
        expect(fizzbuzz.convert(3)).toEqual("Fizz");
    });

    it("should return Buzz when passing the number 5", function(){
        expect(fizzbuzz.convert(5)).toEqual("Buzz");
    });

    it("should return Buzz when passing the number 15", function(){
        expect(fizzbuzz.convert(15)).toEqual("FizzBuzz");
    });

    it("should return 2 when passing the number 2", function(){
        expect(fizzbuzz.convert(2)).toEqual(2);
    });

});