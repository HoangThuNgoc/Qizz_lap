theList = ['Lauren', 'Kevin',true,35,null,undefined,[ 'one', 'two']];
// xoa phan tu dau
const yc1=theList.pop();
console.log(theList)
// xoa phan tu cuoi
const yc2=theList.shift();
console.log(theList)
// them vao dau mang
const yc3=theList.unshift("First");
console.log(theList)
//them vi tri thu 4 
const yc4=theList.splice(3,0,"hello word")
console.log(theList)
//them vi tri thhu 3
const yc5=theList.splice(2,0,"middle")
console.log(theList)
// them cuoi mang 
const yc6=theList.push("last")
console.log(theList)