// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const prefixAvg = [];
    for (
        let sliceStartIndex = 0;
        sliceStartIndex < A.length - 1;
        sliceStartIndex++
    ) {
        let minAvg = Infinity;
        let sum = A[sliceStartIndex];

        for (
            let sliceEndIndex = sliceStartIndex + 1;
            sliceEndIndex < A.length;
            sliceEndIndex++
        ) {
            // console.log(A[sliceStartIndex], A[sliceEndIndex]);
            sum += A[sliceEndIndex];
            minAvg = Math.min(
                minAvg,
                sum / (sliceEndIndex - sliceStartIndex + 1)
            );
        }

        prefixAvg.push([minAvg, sliceStartIndex]);
        // console.log(minAvg);
        // console.log("----");
    }
    // console.log(prefixAvg);
    return prefixAvg.sort((a, b) => a[0] - b[0])[0][1];
}

// https://app.codility.com/demo/results/trainingJ89SN2-M2H/
// O(N ** 2) timeout
console.log(solution([4, 2, 2, 5, 1, 5, 8]));
// console.log(solution([-10000, 10000, 1000, 999, 3452, 123]));
// console.log(solution([-10000, -2000, -200]));
