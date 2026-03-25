
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';



//req mwgod hena w f api bss mkanen dol bs 
export default async function middleware (req  : NextRequest) {




const jwt= await getToken({req})

console.log("jwt",jwt)

if (jwt) {
    
    return NextResponse.next()
    
}

return NextResponse.redirect("http://localhost:3000/login")

}



export const config={matcher:["/cart"]}