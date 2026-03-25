import * as z from "zod"

//validation schema  by zod 

export const logInSchema = z.object({

email:z.email("enter a valid Email").nonempty("Email is required"),


password:z.string().nonempty("Password is required").min(8,"password must be 8 chars at least"),


})

export type logInDataType=z.infer<typeof logInSchema> 

