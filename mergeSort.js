function mergeSort(arr) {
    if(arr.length == 0) return "Enter an array";
    if (arr.length == 1) return arr;

    const mid = Math.floor(arr.length /2);
    const leftHalf = arr.slice(0,mid);
    const rightHalf = arr.slice(mid,arr.length);
    return merge(mergeSort(leftHalf),mergeSort(rightHalf)); //recursive calls
}

function merge(leftHalf,rightHalf) {
    let retArr=[];
    let i=0,j=0; //indexes
    while(i<leftHalf.length && j<rightHalf.length) {
        if(leftHalf[i]<rightHalf[j]) {
            retArr.push(leftHalf[i++]); //Push left half element and update index
        }
        else{
            retArr.push(rightHalf[j++]); //Push right half element and update index
        }
    }
    while(i<leftHalf.length) {
        retArr.push(leftHalf[i++]); //Push left half element and update index
    }
    while(j<rightHalf.length) {
        retArr.push(rightHalf[j++]); //Push right half element and update index
    }
    return retArr;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));