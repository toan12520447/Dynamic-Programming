const allConstruct = (target, wordBank) =>{
    let table = Array(target.length + 1)
    .fill()
    .map(() => []);
    table[0] = [[]];
    for (let i = 0; i <= target.length; i++){
        for (const word of wordBank){
            if (target.slice(i, i + word.length) === word){
                const newCombinations = table[i].map((subArray) =>[...subArray,word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }
    return table[target.length];
}

console.log(allConstruct('abcdef',['ab','abc','cd','def','abcd','ef','c'
]));
console.log(allConstruct("eeeeeef",['ee']));