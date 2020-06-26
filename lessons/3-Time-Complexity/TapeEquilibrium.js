// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const sum = (numbers) =>
    numbers.reduce((sumNumber, number) => sumNumber + number);

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let minDiff = Infinity;
    let left = 0;
    const sumAll = sum(A);

    for (let i = 1; i < A.length; i++) {
        left += A[i - 1];
        const right = sumAll - left;

        const diff = Math.abs(left - right);
        if (minDiff > diff) {
            minDiff = diff;
        }
    }
    return minDiff;

    // wrong
    // let left = 0;
    // const sumAll = sum(A);
    // return A.reduce((minDiff, number) => {
    //     left += number;
    //     const right = sumAll - left;

    //     const diff = Math.abs(left - right);
    //     return minDiff > diff ? diff : minDiff;
    // }, Infinity);
}

// https://app.codility.com/demo/results/trainingM2KPB6-J3B/
console.log(solution([3, 1, 2, 4, 3])); // 1
console.log(solution([-1000, 1000])); // 2000
console.log(solution([-2, -3, -4, -1])); // 0
