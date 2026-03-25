
import { log } from "console";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const nextAuthConfig : NextAuthOptions ={


providers:[



        Credentials({

            credentials:{
                email:{ },
                password:{},
                },


authorize : async function(userData) {

let res= await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,{

method:"POST",
body: JSON.stringify(userData),
headers:{
'Content-Type':"application/json"
}
})


let finalRes= await res.json()

console.log("finalRes",finalRes);



if (  finalRes.message == "success"  ) {
    return {
        id:"",
        name:finalRes.user.name,
        email:finalRes.user.email,
        userTokenFromBackEnd:finalRes.token
    }
}else{
    return null
}
}
    })
],

pages:
{
signIn:"/login"
},

callbacks:{
    //jwt 3shan a5od el token mn el back end w a7oto fe el token bta3i w a7oto fe el session 3shan a5odoh w ast5dmoh 
    jwt(params) {

        if (params.user) {

            params.token.userTokenFromBackEnd  =   params.user.userTokenFromBackEnd
        }
        


        return params.token

        },
        //session 3shan a5od el token mn el jwt ll client w ast5dmoh fe el client
session(params) {
    log("params",params);
    return params.session

}
},

session:{
maxAge: 60 * 60 * 24, // 1 day
updateAge: 60 * 60, // 1 hour
}

}
