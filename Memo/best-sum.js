const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum == 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(7, [2, 3])); //[2,2,3]
console.log(bestSum(7, [3, 5, 4])); //[3,4]
console.log(bestSum(8, [2, 3, 5])); //[3,5]
console.log(bestSum(300, [7, 14])); //null
