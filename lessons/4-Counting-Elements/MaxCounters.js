// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let maxCount = 0;
    let setMaxCount = 0;
    return A.reduce((counts, countPosition) => {
        const countIndex = countPosition - 1;
        if (countIndex >= N) {
            setMaxCount = maxCount;
            return counts;
        }

        const currentCount = counts[countIndex];
        const nextCount =
            (setMaxCount > currentCount ? setMaxCount : currentCount) + 1;
        if (nextCount > maxCount) {
            maxCount = nextCount;
        }
        counts[countIndex] = nextCount;
        return counts;
    }, new Array(N).fill(0)).map((count) =>
        setMaxCount > count ? setMaxCount : count
    );
}

// https://app.codility.com/demo/results/trainingQ87N2E-52W/
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
console.log(solution(1, [1]));
