
import { test, expect, type Page } from '@playwright/test';
import { log } from 'console';


test ('Assign1', async({})=>{

    // Odd or even
    function isOddorEven (numb){

        let a=numb

        if (a%2==0) {

          //  console.log("The given number is even number");
               
        }
        else {

           // console.log("The given number is odd number");
            
        }

    }

    isOddorEven(200)

    // Using switch case
    function numberType (a){

        switch (true) {
            case (a>0):
               return console.log("The given number is greater than 0");

               
            case a<0:
                return  console.log("The given number is less than 0");
                
            case a===0:
                return console.log("The given number is equal to 0");
                
        
            default:

                break;
        }

        console.log("done");
        

    }

    let result = numberType(-100)
    console.log(result);

    // Using if else statement
    function numberType1 (num){  

          let a:number=num
  
        if (num > 0) {
            return "Positive";
        } else if (num < 0) {
            return "Negative";
        } else {
            return "Zero";
        }
  
      }
  
      let result1 = numberType1(-100)
      console.log(result);
    







      

})




