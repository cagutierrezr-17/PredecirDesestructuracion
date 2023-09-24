//PROBLEMA_1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
console.log(randomCar);
console.log(otherRandomCar);

//PREDICT THE OUTPUT
// console.log(randomCar) = "Tesla";
// console.log(otherRandomCar) = "Mercedes";

//PROBLEMA_2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);
console.log(otherName);

//PREDICT THE OUTPUT
//console.log(name) = errorDeReferencia_Name no existe como key del objeto (nameIsNotDefine);
//console.log(otherName) = Al tener error el primero este no se ejecuta

//PROBLEMA_3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
console.log(password);
console.log(hashedPassword);

//PREDICT THE OUTPUT
// console.log(password) = 12345;
// console.log(hashedPassword) = Undefined;

//PROBLEMA_4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
console.log(first == second);
console.log(first == third);

//PREDICT THE OUTPUT
// console.log(first == second) = false
// console.log(first == third) = true

//PROBLEMA_5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//PREDICT THE OUTPUT
// console.log(key) = value
// console.log(secondKey) = [1, 5, 1, 8, 3, 3]
// console.log(secondKey[0]) = 1
// console.log(willThisWork) = 5