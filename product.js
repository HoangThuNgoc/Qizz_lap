var list=[];
var item1={
    name:"sp1",
    model:'Asdf',
    const:23454
}
var item2={
    name:"sp2",
    model:'Asdf',
    const:23454
}
var item3={
    name:"sp456",
    model:'Asdf',
    const:23454
}
// gop object thanh mang
list.push(item1);
console.log(item1);
list.push(item2);
list.push(item3);
console.log(list);
// loc lay tung phan tu cua mang
function product(arr){
    // console.log(arr)
    for(const lists of arr){
        console.log(lists)
    }
}
product(list)