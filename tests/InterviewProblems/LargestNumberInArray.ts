

/** 
| Symbol | Name            | Purpose                              |
| `...`  | Spread operator | Expands array into individual values |

*/

function largestNumberInArray(arr:number[]):number {


    return Math.max(...arr)
    
}


console.log(largestNumberInArray([100,2,113,4,5]));
