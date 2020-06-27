// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    A.sort((a, b) => a - b);

    const range = A.length - 2;
    for (let i = 0; i < range; i++) {
        const P = A[i];
        const Q = A[i + 1];
        const R = A[i + 2];

        if (P + Q > R && Q + R > P && R + P > Q) {
            return 1;
        }
    }
    return 0;
}

// https://app.codility.com/demo/results/trainingSFHA8N-YBK/
// O(N*log(N))
console.log(solution([10, 2, 5, 1, 8, 20])); // 1
console.log(solution([10, 50, 5, 1])); // 0
console.log(solution([-2147483648, 2147483647])); // 0
