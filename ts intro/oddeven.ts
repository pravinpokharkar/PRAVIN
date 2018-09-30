var arr1= new Array [1,2]
var i, arrlen;
var arr2= new Array; //even array
var arr3= new Array; //odd array
arrlen= arr1.length; 
for(i=0; i<arrlen; i++)
{
if (arr1[i]%2 ==0)
arr2=arr1[i];
else
arr3= arr1[i];
}
console.log (arr2);
console.log(arr3);
