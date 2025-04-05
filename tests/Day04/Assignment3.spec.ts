
import { test, expect, type Page } from '@playwright/test';
import { log } from 'console';


test ('Assign3', async({})=>{

    
    function launchBrowser (){

       let s:string = "Hello World"

       let str = s.split(" ")

       console.log(str);

       let str2length = str[str.length-1].length

       console.log(str2length);


    }

    launchBrowser()


})




