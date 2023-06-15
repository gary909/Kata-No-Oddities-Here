function noOdds( values ){
    let myArr = [];
    for(let i = 0; i < values.length;i++){
        if(values[i] % 2 == 0){
            myArr.push(values[i])
        }
    }
    return myArr;
}

console.log(noOdds( [0,1] )); // [0]
console.log(noOdds( [0,1,2,3] )); // [0,2]