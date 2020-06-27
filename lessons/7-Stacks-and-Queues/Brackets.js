// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const stack = [];

const bracketIsClose = {
    ")": "(",
    "}": "{",
    "]": "[",
};

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    for (const character of S) {
        if (!bracketIsClose[character]) {
            stack.push(character);
            continue;
        }

        if (stack.pop() !== bracketIsClose[character]) {
            return 0;
        }
    }

    return Number(!stack.length);
}

// https://app.codility.com/demo/results/trainingJVG2CV-RZY/
console.log(solution("{[()()]}")); // 1
console.log(solution("([)()]")); // 0
console.log(solution("{{{{")); // 0
