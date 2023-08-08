console.log('learn while loop');

// ประเภทของ Loop
// - Condition Loop ตัดสินใจว่าจะรันต่อไหม จาก Boolean
// - Counting Loop "----------------" จาก ตัวเลข
// - List Loop "--------------------" จาก จำนวนของในรายการ
console.log('starting...');

// let i = 1;
// while (i <= 20) {
//     // loop block
//     // if (i % 3 == 0) {
//     //     console.log(i);
//     // } else if (i % 5 == 0) {
//     //     console.log(`${i} : High Five`);
//     // }

//     if (i % 5 == 0) {
//         console.log(`${i} : HighFive`);
//     } else if (i % 3 == 0) {
//         console.log(i);
//     }

//     // if (i % 3 != 0) {
//     //     console.log(i);
//     // }

//     i++;
// }

// FizzBuzz Problem
// Range : 1-20;
// divided by 3 : PRINT Fizz
// divided by 5 : PRINT Buzz
// divided by 3 and 5 : PRINT FizzBuzz
// others : PRINT number

let i = 1;

while (i <= 20) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //     console.log('FizzBuzz');
    // } else if (i % 3 === 0) {
    //     console.log('Fizz');
    // } else if (i % 5 === 0) {
    //     console.log('Buzz');
    // } else {
    //     console.log(i);
    // }

    let a = console.log;
    if (i % 3 === 0 && i % 5 !== 0) a('Fizz');
    else if (i % 5 === 0 && i % 3 !== 0) a('Buzz');
    else if (i % 5 === 0 && i % 3 == 0) a('FizzBuzz');
    else a(i);

    // i % 3 === 0 && i % 5 === 0
    //     ? console.log('FizzBuzz')
    //     : i % 3 === 0
    //     ? console.log('Fuzz')
    //     : i % 5 === 0
    //     ? console.log('Buzz')
    //     : console.log(i);
    i++;
}

console.log('end....');
