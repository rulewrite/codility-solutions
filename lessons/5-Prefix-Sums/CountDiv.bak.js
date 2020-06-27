// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    let count = 0;
    for (let i = A; i <= B; i++) {
        if (!(i % K)) {
            ++count;
        }
    }
    return count;
}

// O(A + B) timeout
console.log(solution(6, 11, 2));
console.log(solution(0, 2000000000, 1));
console.log(solution(0, 2000000000, 2000000000));
console.log(solution(2000000000, 2000000000, 2000000000));
console.log(solution(1, 2000000000, 1));
console.log(solution(1, 2000000000, 2000000000));
console.log(solution(2000000000, 2000000000, 2000000000));
