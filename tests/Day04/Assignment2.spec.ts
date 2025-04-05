
import { test, expect, type Page } from '@playwright/test';
import { log } from 'console';


test ('Assign2', async({})=>{

    
    function launchBrowser (browserName){

       if (browserName = "Chrome") {
        console.log("Chrome");
        
       }else if (browserName = "Edge") {
        console.log("Edge");
       }else {
        console.log("No browser is selected");
       }

    }

    launchBrowser("Chrome")

    function runTests (testType){

        switch (testType) {
            case ("Sanity"):
               return console.log("Sanity");

            case ("Regression"):
                return  console.log("Regression");
                
            default:
                return  console.log("Smoke");

        }

        

    }

   // runTests("SG")


      

})




