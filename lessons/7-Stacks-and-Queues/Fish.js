// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const stack = [];
function solution(sizes, directions) {
    // write your code in JavaScript (Node.js 8.9.4)
    console.log(sizes, directions);

    let liveCount = 0;
    for (let index = 0; index < sizes.length; index++) {
        const direction = directions[index];
        const size = sizes[index];

        if (direction === 1) {
            stack.push(size);
            continue;
        }

        while (stack.length) {
            let prevSize = stack.pop();
            if (prevSize > size) {
                stack.push(prevSize);
                break;
            }
        }

        if (!stack.length) {
            ++liveCount;
        }
    }
    return liveCount + stack.length;
}

// https://app.codility.com/demo/results/trainingT46ZH4-SAB/
console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])); // 2
console.log(solution([0, 1], [1, 1])); // 2
