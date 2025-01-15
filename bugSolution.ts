function combine<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const numResult = combine([1, 2, 3], [4, 5, 6]);
console.log(numResult); // Output: [1, 2, 3, 4, 5, 6]

const strResult = combine(['hello', 'world'], ['typescript', 'bug']);
console.log(strResult); // Output: ['hello', 'world', 'typescript', 'bug']

function combineNumbers(arr1: number[], arr2: number[]): number[] {
  if (!arr1.every(Number.isFinite) || !arr2.every(Number.isFinite)) {
    throw new Error('Arrays must contain only numbers');
  }
  return [...arr1, ...arr2];
}

const numResult2 = combineNumbers([1, 2, 3], [4, 5, 6]);
console.log(numResult2); // Output: [1, 2, 3, 4, 5, 6]

//This will throw an error
//const numResult3 = combineNumbers([1,2,3], [4,5,'6']);
//console.log(numResult3)