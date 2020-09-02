function aprobo([a,b,c,d]){
    var arr=[a,b,c,d];
    return arr.every(i=> i>=4);
}
console.log(aprobo([8,6,2,4]));
