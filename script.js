let toys = ["car", "truck", "wagon"];

console.log(toys);

let numbers = [9, 0, 1, 0.1, 5];

console.log(numbers);

let letters = ["a", "b", "c", "d"]

console.log(letters);

let cars = ["ford", "dodge", "kia", "lexus", "tesla"];

console.log(cars);

cars[4] = ("mercedes");

console.log(cars);

cars.splice(0,0, "bmw"); // cars.unshift("bmw")--> aynı işlemi yapardı.

console.log(cars);

let person = [];

person[0] = ("John");

person[1] = ("Doe");

person[2] = (46);

console.log(person);

[x, y, z] =[0, 1, 2];   

console.log(`${x} ${y} is ${z} years old.`);