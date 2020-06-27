// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    /**
     * const pivot = A[0]; 로 해놓고
     * [1, 0] => 1 이 맞는데 결과에선 0이 맞다고 해서 비교하고 문제를 다시 보니
     * P = east = 0
     * Q = west = 1
     *
     * 0 <= P < Q < N
     * (P,Q)의 쌍 "만"이었음.
     */
    const pivot = 0;

    let countUnit = 0;
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        if (pivot === A[i]) {
            ++countUnit;
        } else {
            count += countUnit;
        }

        if (count > 1000000000) {
            return -1;
        }
    }
    return count;
}

// https://app.codility.com/demo/results/trainingU49Z6U-RAU/
console.log(solution([0, 1, 0, 1, 1])); // 5
console.log(solution([1, 0]));
