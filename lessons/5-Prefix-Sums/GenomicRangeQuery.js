// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const mapImpactFactors = [1, 2, 3, 4];

const mapNucleotideIndex = {
    A: 0,
    C: 1,
    G: 2,
    T: 3,
};

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)

    const prefixSums = Array.prototype.reduce.call(
        S,
        (prefixSums, nucleotide, index) => {
            const next = prefixSums[index].slice(0, prefixSums[index].length);
            next[mapNucleotideIndex[nucleotide]] += 1;
            prefixSums.push(next);

            return prefixSums;
        },
        [[0, 0, 0, 0]]
    );

    console.log("prefixSums: \n", prefixSums);
    console.log("");
    return P.reduce((ranges, start, commonIndex) => {
        const end = Q[commonIndex];
        console.log(`${start} to ${end} + 1`);

        const endPrefiex = prefixSums[end + 1];
        const startPrefiex = prefixSums[start];
        console.log("start", startPrefiex, "end", endPrefiex);

        for (let j = 0; j < 4; j++) {
            const value = endPrefiex[j] - startPrefiex[j];
            console.log(value);
            if (value > 0) {
                ranges.push(mapImpactFactors[j]);
                break;
            }
        }

        console.log("-----------");
        return ranges;
    }, []);
}

// https://app.codility.com/demo/results/trainingX7AUF8-D6H/
// O(N + M)
console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
