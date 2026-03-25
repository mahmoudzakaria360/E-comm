// "use server"

// import { signUpDataType } from "@/app/(Auth)/signup/schema";
// import axios from "axios";
// import { cookies } from "next/headers";


// export default async function signupAction(userData:signUpDataType) {


// //   data haya ally hatrg3                                                 userdata hya elly bttb3t  
// const {data}=await axios.post( `https://ecommerce.routemisr.com/api/v1/auth/signup` , userData )

// console.log(data);

// if(data.message==="success"){
//     const session =await cookies()
//         session.set("userToken" ,data.token,{
//             httpOnly:true,
//             maxAge:60*60*24,
//             sameSite:"strict",
//         })
// return true
// }
// else{
// return false 
// }

// }




"use server"

import axios from "axios"
import { cookies } from "next/headers"
import { signUpDataType } from "@/app/(Auth)/signup/schema"

export default async function signupAction(userData: signUpDataType) {

  try {

    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      userData
    )

    if (data.message === "success") {

      const cookieStore = await cookies()

      cookieStore.set("userToken", data.token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })

      return {
        success: true,
        message: "Account created successfully",
      }
    }

    return {
      success: false,
      message: data.message,
    }

  } catch (error: any) {

    return {
      success: false,
      message: error?.response?.data?.message || "Signup failed",
    }

  }
}
