// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const half = Math.floor(A.length / 2);
    let frequency = new Map();

    // 전체 리더 숫자 및 갯수 저장
    let leaderNumber = 0;
    let leaderFrequency = 0;
    for (let index = 0; index < A.length; index++) {
        const number = A[index];
        const prev = frequency.get(number) || [];
        prev.push(index);
        frequency.set(number, prev);

        if (prev.length > half && prev.length > leaderFrequency) {
            leaderFrequency = prev.length;
            leaderNumber = number;
        }
    }

    let count = 0;
    let leftLeaderCount = 0;
    const aLength = A.length;
    for (let index = 0; index < aLength; index++) {
        const number = A[index];

        // 현재 넘버가 전체 리더 넘버와 같다면 왼쪽 리더 수 1 증가
        if (number === leaderNumber) {
            leftLeaderCount++;
        }
        // 오른쪽 리더 수는 왼쪽 리더를 제외 한 수
        const rightLeaderCount = leaderFrequency - leftLeaderCount;

        // 양쪽 요소 수
        const leftLength = index + 1;
        const rightLength = aLength - leftLength;
        // 양쪽의 리더 수가 과반수를 넘는지
        if (
            leftLeaderCount > Math.floor(leftLength / 2) &&
            rightLeaderCount > Math.floor(rightLength / 2)
        ) {
            count++;
        }
    }
    return count;
}

// https://app.codility.com/demo/results/trainingPMHAW5-S5E/
// O(N)
console.log(solution([4, 3, 4, 4, 4, 2])); // 2
console.log(solution([1, 2])); // 0
