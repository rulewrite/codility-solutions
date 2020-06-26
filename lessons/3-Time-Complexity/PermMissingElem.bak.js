// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    return (
        A.sort().find((number) => {
            return number !== ++count;
        }) - 1
    );
}

// 정확성, 속도 이슈
console.log(solution([2, 3, 1, 5]));
