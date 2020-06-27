// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const mapKey = new Map();
    for (let index = 0; index < A.length; index++) {
        const element = A[index];

        const prev = mapKey.get(element) || { count: 0, indices: [] };
        ++prev.count;
        prev.indices.push(index);
        mapKey.set(element, prev);
    }

    let maxCount = 0;
    let firstIndex = -1;
    const half = A.length / 2;
    mapKey.forEach(({ count, indices }) => {
        if (count > half && count > maxCount) {
            maxCount = count;
            firstIndex = indices[0];
        }
    });
    return firstIndex;
}

// https://app.codility.com/demo/results/training4KBEMW-DT4/
// O(N*log(N)) or O(N)
// 코드가 안이쁘지만..
console.log(solution([3, 4, 3, 2, 3, -1, 3, 3])); // 0 || 2 || 4 || 6 || 7
console.log(solution([2, 1, 1, 3])); //
