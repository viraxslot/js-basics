// js basics 2: if, for, array, JSON, JSON-file, JSON.stringify, functions, foreach

// foreach
let arr = [1, 2, 3, 4];
arr.forEach((el) => {
    const res = el + 2;
    console.log(res);
});

// arrow functions
// const sqrt = function (x) {
//     return x * x;
// };

// const sqrt1 = (x) => {
//     return x * x;
// };

// const sqrt2 = (x) => x * x;

// console.log(sqrt(2));
// console.log(typeof sqrt);

// functions

// function sqrt(x) {
//     return x * x;
// }

// let x = 2;
// let result = sqrt(x);
// console.log(result);

// JSON
// let obj = {
//     name: 'Maria',
//     age: 23,
//     test: {
//         test1: {
//             x: 1,
//         },
//     },
// };

// console.log(JSON.stringify(obj));

// array
// let arr = [1, 2, 3, 4];

// // for
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// if
// let x = 1;
// if (x == '1') {
//     console.log('equal');
// }

// let y = 1;
// if (y === '1') {
//     console.log('equal');
// } else {
//     console.log('NOT equal');
// }
