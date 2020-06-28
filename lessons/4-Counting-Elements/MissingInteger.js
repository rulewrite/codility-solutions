// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if (A.every((number) => 0 > number)) {
        return 1;
    }

    const numberArray = [];
    A.forEach((leafX) => {
        numberArray[leafX - 1] = true;
    });

    const missedIndex = numberArray.findIndex((flag) => !flag);
    return (missedIndex > -1 ? missedIndex : numberArray.length) + 1;
}

// https://app.codility.com/demo/results/training2VA4MV-KQB/
console.log(solution([1, 3, 6, 4, 1, 2, 7])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1
console.log(solution([2, 3])); // 1
