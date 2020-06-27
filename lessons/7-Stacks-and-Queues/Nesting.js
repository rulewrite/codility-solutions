// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const stack = [];
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    for (const character of S) {
        if (character === "(") {
            stack.push("(");
            continue;
        }

        if (stack.pop() !== "(") {
            return 0;
        }
    }

    return Number(!stack.length);
}

// https://app.codility.com/demo/results/trainingENCJMU-467/
console.log(solution("(()(())())")); // 1
console.log(solution("())")); // 0
