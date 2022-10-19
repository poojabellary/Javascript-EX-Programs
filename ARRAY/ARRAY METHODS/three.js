var ename="Rahul Gandhi";
console.log(ename)

var arr1=ename.split("");
console.log(arr1)

var reg=/[aeiou]/ig

var arr2=ename.match(reg)
console.log(arr2)

var noVowels=[]

for(var i=0;i<arr1.length;i++)
{
    if(arr2.indexOf(arr1[i])===-1)
    {
        noVowels.push(arr1[i])
    }
}
console.log(noVowels.join(""))

ename.reverse(ename)
console.log(ename)
