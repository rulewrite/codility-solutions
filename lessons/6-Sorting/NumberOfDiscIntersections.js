// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const [lefts, rights] = A.reduce(
        (position, radius, center) => {
            position[0].push(center - radius);
            position[1].push(center + radius);
            return position;
        },
        [[], []]
    ).map((points) => points.sort((a, b) => a - b));

    let intersection = 0;
    let leftIndex = 0;
    for (let rightIndex = 0; rightIndex < A.length; rightIndex++) {
        console.log("rightIndex: ", rightIndex);
        for (
            ;
            // 왼쪽 점과 오른쪽 점의 비교
            // 오른쪽 점 A 보다 작거나 같은 왼쪽 점들은 A보다 크거나 같은 오른쪽 점을 가짐. 즉 교차함.
            leftIndex < A.length && lefts[leftIndex] <= rights[rightIndex];
            leftIndex++
        ) {
            console.log("    교차함 leftIndex: ", leftIndex);
            intersection += leftIndex - rightIndex;
            console.log(`+ ${leftIndex - rightIndex} = ${intersection}`);

            if (intersection > 10000000) {
                return -1;
            }
        }
    }
    return intersection;
}

// https://app.codility.com/demo/results/training333U4K-5UT/
// 그림 참고 http://www.lucainvernizzi.net/blog/2014/11/21/codility-beta-challenge-number-of-disc-intersections/
// https://jobjava00.github.io/algorithm/codility/lesson6/NumberOfDiscIntersections/
// O(N*log(N)) or O(N)
console.log(solution([1, 5, 2, 1, 4, 0])); // 11
// console.log(solution([0, 3, 2, 147, 483, 647, 2147483647])); // 21
