// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)

    const gap = Y - X;
    return Math.ceil(gap / D);
}

console.log(solution(10, 85, 30));
