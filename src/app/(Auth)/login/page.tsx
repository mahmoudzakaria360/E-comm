"use client"
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from 'react-hook-form'
import { logInDataType, logInSchema } from './schema'
import{ signIn} from "next-auth/react"



export default function page() {

  const form = useForm({
    //default values for the form fields needed from the backend to avoid uncontrolled to controlled error
    defaultValues:{
      email:"",
      password:"",
    }, 
    //resolver by zod to connect the validation schema with react hook form
    resolver: zodResolver(logInSchema)
  })
  
  //api function
  async function handelLogIn(values:logInDataType){

    
signIn("credentials" , { ...values ,redirect:true,  callbackUrl:"/"})
  
  }
  
  return (


<>

<div className='container max-w-5xl mx-auto shadow-2xl p-5 rounded-lg mt-5'>

  
    <h1 className='text-4xl my-10 text-center '>LOG IN</h1>


    <div>

        <form  onSubmit={form.handleSubmit(handelLogIn)} className='w-full md:w-1/2 mx-auto'>

                <Controller
                name="email"
  control={form.control}

  render={({ field, fieldState }) => (

    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>

      <Input
        {...field}
        type='email'
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your email"
        autoComplete="off"
      />
      <FieldDescription>      </FieldDescription>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
                )}
                />

                <Controller
                name="password"
  control={form.control}

  render={({ field, fieldState }) => (

    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password</FieldLabel>

      <Input
        {...field}
        type='password'
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your password"
        autoComplete="off"
      />
      <FieldDescription>

      </FieldDescription>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
                )}
                />

                <Button className='w-full mt-5 cursor-pointer' type='submit'>
                        logIN 
                </Button>

        </form>

    </div>

</div>

</>

)}
// "use client"

// import { Button } from "@/components/ui/button"
// import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import { Controller, useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { toast } from "sonner"
// import { useRouter } from "next/navigation"

// import { logInDataType, logInSchema } from "./schema"
// import logInAction from "@/_services/_serverActions/login.action"
// import { signIn } from "next-auth/react"

// export default function Page() {

// const router = useRouter()

// // login function
// async function handleLogIn(values: logInDataType) {

// const res = await logInAction(values)

// if (res.success) {

//   toast.success(res.message, {
//     position: "top-center",
//     duration: 3000,
//   })


//   // signIn(  "cradentials" , { ...value ,redirect: true,  callbackUrl: "/",} )
//   router.push("/")

// } else {

//   toast.error(res.message, {
//     position: "top-center",
//   })

// }


// }

// const form = useForm<logInDataType>({
// defaultValues: {
// email: "",
// password: "",
// },
// resolver: zodResolver(logInSchema)
// })

// return (
// <> <div className="container max-w-5xl mx-auto shadow-2xl p-5 rounded-lg mt-5">


//     <h1 className="text-4xl my-10 text-center">LOG IN</h1>

//     <div>

//       <form
//         onSubmit={form.handleSubmit(handleLogIn)}
//         className="w-full md:w-1/2 mx-auto shadow-gray-500 shadow-lg p-5 rounded-lg"
//       >

//         <Controller
//           name="email"
//           control={form.control}
//           render={({ field, fieldState }) => (

//             <Field data-invalid={fieldState.invalid}>
//               <FieldLabel htmlFor={field.name}>Email</FieldLabel>

//               <Input
//                 {...field}
//                 type="email"
//                 id={field.name}
//                 aria-invalid={fieldState.invalid}
//                 placeholder="enter your email"
//                 autoComplete="off"
//               />

//               <FieldDescription />
//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>
            
//           )}
//         />

//         <Controller
//           name="password"
//           control={form.control}
//           render={({ field, fieldState }) => (

//             <Field data-invalid={fieldState.invalid}>
//               <FieldLabel htmlFor={field.name}>Password</FieldLabel>

//               <Input
//                 {...field}
//                 type="password"
//                 id={field.name}
//                 aria-invalid={fieldState.invalid}
//                 placeholder="enter your password"
//                 autoComplete="off"
//               />

//               <FieldDescription />
//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>

//           )}
//         />

//         <Button
//           className="w-full mt-5 cursor-pointer"
//           type="submit"
//           disabled={form.formState.isSubmitting}
//         >
//           Log In
//         </Button>

//       </form>

//     </div>

//   </div>
// </>


// )
// }

