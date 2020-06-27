// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    return A.reduce((unique, number) => {
        unique.add(number);
        return unique;
    }, new Set()).size;
}

// https://app.codility.com/demo/results/trainingRAVMHA-JK6/
console.log(solution([2, 1, 1, 2, 3, 1])); // 3
console.log(solution([0])); // 1
console.log(solution([-1, -2, 0, -2])); // 3
