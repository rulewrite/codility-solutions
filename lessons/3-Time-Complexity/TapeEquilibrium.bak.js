// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const sum = (numbers) =>
    numbers.reduce((sumNumber, number) => sumNumber + number);

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let minimumDifference = Infinity;
    for (let index = 1; index < A.length; index++) {
        const difference = Math.abs(
            sum(A.slice(0, index)) - sum(A.slice(index, A.length))
        );
        if (minimumDifference > difference) {
            minimumDifference = difference;
        }
    }
    return minimumDifference;
}

// O(N * N)
console.log(solution([3, 1, 2, 4, 3]));
