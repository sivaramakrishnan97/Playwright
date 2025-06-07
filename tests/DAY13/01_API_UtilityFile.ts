
import { APIRequestContext } from "@playwright/test";


//Endpoint
const endPointUrl = "https://login.salesforce.com/services/oauth2/token"

let accessToken:any
let instanceUrl:any
let tokenType:any
let id : any
const grant_type= "password"
const client_id= "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB"
const client_secret= "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260"
const username= "ravindran.ramdas@testleaf.com"
const password= "Ravitest#1432"



export async function generateToken(request:APIRequestContext){   //explicit type inference

const response = await request.post(endPointUrl, {
headers: {
"Content-type": "application/x-www-form-urlencoded"
},
form: {
"grant_type": grant_type,
"client_id": client_id,
"client_secret": client_secret,
"username": username,
"password": password
}
})

const resBody = await response.json();
console.log(resBody);
accessToken = resBody.access_token
instanceUrl = resBody.instance_url
tokenType = resBody.token_type
console.log(`${tokenType} ${accessToken} ${instanceUrl}`)

return {
acesss : accessToken,
url : instanceUrl,
token:tokenType
}

}


export async function createResource(request:APIRequestContext,lname:string,company:string) {

const response = await request.post(`${(await generateToken(request)).url}./services/data/v63.0/sobjects/Lead/`, {
headers: {
"Authorization":`${tokenType} ${accessToken}`,
"Content-type": "application/json"
},
data: {
"lastname":lname,
"company":company
}
})

const responseBody = await response.json()
id = responseBody.id;

return id
}


export async function getResource(request:APIRequestContext) {

const response = await request.get(
`${(await generateToken(request)).url}./services/data/v63.0/sobjects/Lead/${id}`, {
headers: {
"Authorization":`${tokenType} ${accessToken}`,
"Content-type": "application/json"
},
})
const responseBody = await response.json()

return responseBody.LastName
}

