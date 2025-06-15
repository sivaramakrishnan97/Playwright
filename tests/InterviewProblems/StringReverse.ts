
// Reverse the string

function StringReverse(S1:string):string {

    const result = S1.split('').reverse().join('')

    return result
    
}

console.log(StringReverse("Hi World"));
