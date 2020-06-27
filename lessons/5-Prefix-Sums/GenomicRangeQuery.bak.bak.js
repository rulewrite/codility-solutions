// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const mapImpactFactors = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
};

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)

    let minimumFactors = [];
    for (let pIndex = 0, qIndex = 0; pIndex < P.length; pIndex++, qIndex++) {
        let minimumFactor = Infinity;
        for (let pivot = P[pIndex]; pivot <= Q[qIndex]; pivot++) {
            minimumFactor = Math.min(mapImpactFactors[S[pivot]], minimumFactor);
        }
        minimumFactors.push(minimumFactor);
    }
    return minimumFactors;
}

// https://app.codility.com/demo/results/trainingQV53BM-KYV/
// O(N * M) timeout
console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
