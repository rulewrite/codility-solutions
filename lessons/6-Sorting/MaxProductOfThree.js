// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    A = A.sort((a, b) => a - b);
    const lastIndex = A.length - 1;

    const greedProduct = A[lastIndex] * A[lastIndex - 1] * A[lastIndex - 2];
    const mixProduct = A[0] * A[1] * A[lastIndex];
    return Math.max(greedProduct, mixProduct);
}

// https://app.codility.com/demo/results/trainingP7EEB4-3JG/
console.log(solution([-3, 1, 2, -2, 5, 6])); // 60
console.log(solution([-10, -2, -4])); // -80
console.log(solution([-5, 5, -5, 4])); // 125
console.log(solution([-5, -6, -4, -7, -10])); // -120
