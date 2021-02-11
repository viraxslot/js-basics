// js basics 4: operators ?./??/||

// ?.

let test = {
    name: {
        test: 123,
    },
};

test = {
    x: 1,
};

console.log(test?.name?.test);

// function doSomething(x) {
//     const defaultParameter = x ?? 12;

//     console.log(defaultParameter);
// }

// doSomething(123);

// let y = 0;
// doSomething(y);
