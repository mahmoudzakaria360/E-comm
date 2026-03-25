import * as z from "zod"

//validation schema  by zod 

export const sginUpSchema = z.object({

name:z.string().nonempty("Name is required").min(3,"at least two names required"),

email:z.email("enter a valid Email").nonempty("Email is required"),

phone:z.string().nonempty("Phone number is required").regex(/^01[0125][0-9]{8}$/),

password:z.string().nonempty("Password is required").min(8,"password must be 8 chars at least"),

rePassword:z.string().nonempty("Re-Password is required").min(8,"password must be 8 chars at least"),

}).refine( (data)=>data.password===data.rePassword,{

    path:["rePassword"],

    error:"password & rePassword are not matched"

})

export type signUpDataType=z.infer<typeof sginUpSchema> 

