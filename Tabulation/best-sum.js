const bestSum = (targetSum, numbers) =>{
    let table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for(let i = 0; i <= targetSum; i++){
        if (table[i] !== null){
            for (const num of numbers) {
                const combination = [...table[i], num];
                if (!table[i + num] || table[i + num].length > combination.length){
                    table[i + num] = combination;
                }
            }
        }
    }
    return table[targetSum];
}

console.log(bestSum(7,[2,3]));//[2,2,3]
console.log(bestSum(7,[3,5,4]));//[3,4]
console.log(bestSum(8,[2,3,5]));//[3,5]
console.log(bestSum(300,[7,14]));//null