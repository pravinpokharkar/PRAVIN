var i;
var arr1=new Array;
arr1[0]=1;
arr1[1]=1;

for (i=1; i<100; i++)
{
arr1[i+1]=arr1[i]+ arr1[i-1]; 
}
console.log(arr1);
