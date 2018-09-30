var arr1 = [1, 2, 34, 45, 56, 45, 34, 56, 67, 78, 73,];
var i, arrlen;
var arr2 = new Array; //even array
var arr3 = new Array; //odd array
arrlen = arr1.length;
var d = 0, e = 0;
for (i = 0; i < arrlen; i++) {
    if (arr1[i] % 2 == 0) {
        arr2[d] = arr1[i];
        d++;
    }
    else {
        arr3[e] = arr1[i];
        e++;
    }
}
console.log(arr2);
console.log(arr3);
