

// 1. Flatten a Nested Array

function flatternArray(arr:any[]):number[] {

    return arr.flat(Infinity)
    
}

const res1 = flatternArray([1, [2, [3, [4]]]])
console.log(res1);

 // Method 2

 function flatten<T>(arr: any[]): T[] {
    return arr.flat(Infinity) as T[];
  }
  
  console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]

// 2. Filter Unique Elements from Array

function UniqueElementInarray<R>(arr: R[]): R[] {

    return [...new Set(arr)]
    
}

console.log(UniqueElementInarray([1,2,4,4,3,2,7]));

function uniqueElements<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }
  
  console.log(uniqueElements([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
  

// filename: test.ts
function uniqueElements1<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }
  
  const testArray = [1, 2, 2, 3, 4, 4];
  console.log("Input:", testArray);
  console.log("Output:", uniqueElements1(testArray));
  

