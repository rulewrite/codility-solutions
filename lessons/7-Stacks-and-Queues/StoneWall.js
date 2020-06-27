// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)

    const stack = [];
    let count = 0;
    for (const height of H) {
        // console.log(stack);
        // 이전 블록의 높이가 현재 높이보다 크면 제거 (별개 블록으로 ㅇㅈ)
        while (stack.length && stack[stack.length - 1] > height) {
            stack.pop();
        }

        // 이전 블록이 없거나 현재 블록보다 낮다면 추가
        if (!stack.length || stack[stack.length - 1] < height) {
            stack.push(height);
            count++;
        }

        // 이전 블록과 현재 블록의 높이가 같다면 아무것도 안함.
    }
    // console.log(stack);
    return count;
}

// https://app.codility.com/demo/results/trainingADPDEG-8E6/
console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])); // 7
