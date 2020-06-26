// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const biggestNumber = A.length + 1;
    const hasNumbers = Array(biggestNumber);

    A.forEach((number) => {
        hasNumbers[number - 1] = true;
    });

    return hasNumbers.findIndex((has) => !has) + 1;
}

// O(N) or O(N * log(N))
console.log(solution([2, 3, 1, 5]));
