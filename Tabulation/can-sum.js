const canSum = (target,numbers) =>{
    let table = Array(target + 1)
    .fill(false)

    table[0] = true
    for (let i = 0; i <= target; i++){
        if (table[i] === true){
            for (num of numbers){
                table[i + num] = true;
            }
        }
    }
    return table[target];
}

console.log(canSum(7,[3,5,4]));//true
console.log(canSum(300,[7,14]));//false