// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    const disks = A.map((radius, position) => {
        return [position - radius, position + radius];
    });

    const pair = [];
    for (let i = 0; i < disks.length - 1; i++) {
        const disk = disks[i];

        for (let j = i + 1; j < disks.length; j++) {
            const nextDisk = disks[j];

            const [diskLeft, diskRight] = disk;
            const [nextDiskLeft, nextDiskRight] = nextDisk;

            if (diskRight >= nextDiskLeft) {
                pair.push([i, j]);
            }
        }
    }
    return pair.length;
}

// https://app.codility.com/demo/results/trainingZFVYT3-H6S/
// O(N**2)
console.log(solution([1, 5, 2, 1, 4, 0])); // 11
console.log(solution([0, 3, 2, 147, 483, 647, 2147483647])); // 21
