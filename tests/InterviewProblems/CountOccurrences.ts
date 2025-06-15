//Count Occurrences of Each Character in a String

function charCount(str:string):Record<string,number> {

    const count:Record<string,number>={}

    for (let char of str){

        count[char]= (count[char] || 0)+1     // Need Explanation
    }  

    return count;
}

console.log(charCount("hello"));
