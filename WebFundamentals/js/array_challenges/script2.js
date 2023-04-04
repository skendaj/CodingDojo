function highPass(arr, cutoff) {
    var filteredArr = arr.filter(function(el) {
        return el > cutoff;
    });
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]