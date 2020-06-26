// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let maxCount = 0;
    return A.reduce((counts, countPosition) => {
        const countIndex = countPosition - 1;
        if (countIndex >= N) {
            return counts.fill(maxCount);
        }

        const currentCount = ++counts[countIndex];
        if (currentCount > maxCount) {
            maxCount = currentCount;
        }
        return counts;
    }, new Array(N).fill(0));
}

// https://app.codility.com/demo/results/trainingKVWVNM-SVR/
// timeout
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(solution(1, [1]));
