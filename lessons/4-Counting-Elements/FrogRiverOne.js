// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const riverXs = new Set();
    return A.findIndex((leafX) => {
        riverXs.add(leafX);
        return X === riverXs.size;
    });
}

// https://app.codility.com/demo/results/trainingZQZVZF-692/
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(2, [2, 2, 2, 2, 2]));
