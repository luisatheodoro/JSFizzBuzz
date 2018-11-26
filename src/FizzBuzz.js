function FizzBuzz(){
}
// why methods are declared like that with no method inside

FizzBuzz.prototype.convert = function(number) {
    return number % 15 == 0 ? 'FizzBuzz' : number % 5 == 0 ? 'Buzz' : number % 3 == 0 ? 'Fizz' : number;

};
