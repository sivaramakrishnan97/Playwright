
// 1. Custom Generic Function

import { log } from "console";

function CustomFunction<F>(arg:F):F {

    return arg;
    
}

console.log(CustomFunction<number>(5));
console.log(CustomFunction<string>("Hi everyone"));
console.log(CustomFunction<string[]>(["Hi everyone", "Hello world", "Welcome back cheif"]));

// 2. Custom Generic Function

interface preferences{

    dress:string
    watch:string
    Amount:number
    Mobile:string 

}


 const siva:preferences = {

    dress:"Shirt",
    watch:"Smart watch",
    Amount:25000,
    Mobile:"Android" 


 }

 function greet(user:preferences):preferences {

   return user
    
 }

console.log(greet(siva));


//3. Convert String to camelCase


function toCamelCase(word:string):string {

    return word.toLowerCase().replace(/[-_](.)/g, (_, group1) => group1.toUpperCase())
    
}

console.log( toCamelCase("Hello_world"));      // helloWorld


// Use Class and Interface Together


interface Person {
    name: string;
    age: number;
  }
  
  class Student implements Person {
    constructor(public name: string, public age: number, public grade: string) {}
  
    getDetails(): string {
      return `${this.name} is ${this.age} years old and in grade ${this.grade}`;
    }
  }

  const st = new Student("siva", 23,"First")
  console.log(st.getDetails());


  // Type-Safe Key Access - TypeSafeKeyAccess


  function getValue< T, K extends keyof T >(obj:T, Key:K):T[K] {

    return obj[Key]
    
  }

   const s = {name:"siva", age:25}
   console.log(getValue(s,"name"));    // Siva


   // Capitalize the First Letter of Each Word

   function Capitalize(word:string):string {
    
    return word.replace(/\b\w/g, char => char.toUpperCase())     // So /\b\w/g means:   “Find every word-starting character”


   }
   
   console.log(Capitalize("Hi everyone"));
   
  
  