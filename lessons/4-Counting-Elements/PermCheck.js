// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const numbers = [];
    A.forEach((number) => {
        numbers[number - 1] = 1;
    });

    if (numbers.length !== A.length) {
        return 0;
    }

    for (let has of numbers) {
        if (!has) {
            return 0;
        }
    }
    return 1;
}

// https://app.codility.com/demo/results/trainingZ4U7KB-SA9/
console.log(solution([4, 1, 3, 2])); // 1
console.log(solution([4, 1, 3])); // 0
console.log(solution([1, 1])); // 0
