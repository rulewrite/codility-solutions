// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const pairMap = A.reduce((pairMap, oddNumber) => {
        const pair = pairMap.get(oddNumber) || [];
        pair.push(oddNumber);

        pairMap.set(oddNumber, pair);
        return pairMap;
    }, new Map());

    return [...pairMap].find(([oddNumber, pair]) => pair.length % 2)[0];
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
