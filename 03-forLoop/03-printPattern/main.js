// print ได้แถวละครั้ง , print ได้ทีละ *
// string concat

// for (let i = 1; i <= 5; i++) {
//     // console.log('#');
// }

// for (i = 1; i <= 5; i++) {
//     let str = '';
//     for (let j = 1; j <= 5; j++) {
//         str = str + '*';
//     }
//     console.log(str);
// }

// STAR PATTERN
// FOR LOOP
// PATTERN RECOGNIZE

// for (let i = 1; i <= 4; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }

// let str ="*   \n**  \n*** \n****\n"

let str = '';
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        // j = 1,2,3,4
        // i = 1,2,3,4
        if (j <= i) str += '*';
    }
    str += '\n';
}

console.log(str);

let s = '';
for (let k = 0; k < 4; k++) {
    s = s + '*';
}

console.log(s);
