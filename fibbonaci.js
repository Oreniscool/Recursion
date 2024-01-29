function fibs(n) {
    let fibSeq =[0,1];
    for(let i=0; i<n-2; i++) {
        fibSeq.push(fibSeq[i]+fibSeq[i+1]);
    }
    return fibSeq;
}

function fibsRec(n, fibSeq=[0,1]) {
    let seqLength=  fibSeq.length;
    if(seqLength==n) {
        return fibSeq;
    }

    fibSeq.push(fibSeq[seqLength-2]+fibSeq[seqLength-1]);
    return fibsRec(n,fibSeq);
}
let repeat = 6
console.log(fibs(repeat));
console.log(fibsRec(repeat));