//1. Print Numbers 1 - 10 using loops//

for(let i = 1; i < 11; i++) {
    console.log(i);
}

//2. Print Odd Numbers 1 - 100//

for(let i = 1; i < 101; i+=2) {
    console.log(i)
}

//3. Print multiplication table 1 - 10//

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach (number => {
    // console.log(number)
    for(let i = 1; i < numbers.length; i++) {
        console.log(`${i} * ${number} = ${i * number}`);
    }
})

//4. Calculate the sum of even numbers greater than 10 and less than 30//


const evenNumbers = [12, 14, 16, 18, 20, 22, 24, 26, 28];

let sumEvenNumbers = 0;

for(let i = 0; i < evenNumbers.length; i++) {
    sumEvenNumbers += evenNumbers[i];
}

console.log(sumEvenNumbers);


//5. Calculate the average of numbers in an array of numbers.

let newNumbers = [1, 2, 5, 8, 10];

let sumNewNumbers = 0;
for(let i = 0; i < newNumbers.length; i++) {
    sumNewNumbers += newNumbers[i];
}

console.log(sumNewNumbers);

let aveNewNumbers = sumNewNumbers / newNumbers.length;

console.log(aveNewNumbers);


//6. Create a function that receives an array of numbers as arguments and returns an array containing only positive numbers

let negNumbers = [-3, -4, -8, -6, -7];

// negNumbers.forEach (negNumber => {
//     posNumber = Math.abs(negNumber);
// })

// console.log(posNumber)
