// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const riverXs = new Array(X).fill(true);
    return A.findIndex((leafX) => {
        riverXs[leafX - 1] = false;
        return riverXs.every((riverX) => !riverX);
    });
}

// https://app.codility.com/demo/results/trainingASBXAP-EZJ/
// 타임아웃 (O(N ** 2))
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
