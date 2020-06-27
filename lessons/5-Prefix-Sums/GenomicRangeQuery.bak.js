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

    const factors = Array.prototype.map.call(
        S,
        (nucleotide) => mapImpactFactors[nucleotide]
    );

    return P.reduce((ranges, start, index) => {
        const end = Q[index];
        ranges.push(Math.min(...factors.slice(start, end + 1)));
        return ranges;
    }, []);
}

// https://app.codility.com/demo/results/training3RH4JX-3VQ/
// O(N * M) timeout
console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
