// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const getDivisionCount = (number, divide) => Math.floor(number / divide + 1); // +1은 0때문에

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    // B 까지의 K 배수
    const lastDivisionCount = getDivisionCount(B, K);
    if (A === 0) {
        return lastDivisionCount;
    }

    // A 전에 나오는 K 배수
    const beforeFirstDivisionCount = getDivisionCount(A - 1, K); // B를 나눌 때 이미 A를 포함하였으므로 A 제거 위해 -1
    return lastDivisionCount - beforeFirstDivisionCount;
}

// https://app.codility.com/demo/results/trainingU2J4CH-EC5/
// O(1)
console.log(solution(0, 8, 2));
console.log(solution(6, 11, 2));
console.log(solution(0, 2000000000, 1));
console.log(solution(0, 2000000000, 2000000000));
console.log(solution(2000000000, 2000000000, 2000000000));
console.log(solution(1, 2000000000, 1));
console.log(solution(1, 2000000000, 2000000000));
console.log(solution(2000000000, 2000000000, 2000000000));
