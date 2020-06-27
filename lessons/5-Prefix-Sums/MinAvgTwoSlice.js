// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let minimumAvg = (A[0] + A[1]) / 2;
    let minimumIndex = 0;

    for (let i = 2; i < A.length; i++) {
        let avg = (A[i - 2] + A[i - 1] + A[i]) / 3;
        if (minimumAvg > avg) {
            minimumAvg = avg;
            minimumIndex = i - 2;
        }

        avg = (A[i - 1] + A[i]) / 2;
        if (minimumAvg > avg) {
            minimumAvg = avg;
            minimumIndex = i - 1;
        }
    }
    return minimumIndex;
}

// https://app.codility.com/demo/results/trainingS7SBG7-MFV/
console.log(solution([4, 2, 2, 5, 1, 5, 8])); // 1
console.log(solution([5, 6, 3, 4, 9])); // 2
// console.log(solution([-10000, 10000, 1000, 999, 3452, 123]));
// console.log(solution([-10000, -2000, -200]));
