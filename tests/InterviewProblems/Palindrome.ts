

function isPalindrome(S1:string):boolean {

    const result = S1.split("").reverse().join("")

    if (result===S1) {
        console.log(result);
        
        return true
    } else {
        console.log(result);

        return  false
    }
    
}

console.log(isPalindrome("madam madam"));

