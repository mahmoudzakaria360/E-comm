"use client"
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { sginUpSchema, signUpDataType } from './schema'

import signupAction from '@/_services/_serverActions/signup.action'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function page() {

  const router = useRouter()
//api function
async function handelSignUp(values:signUpDataType){

 let x= await signupAction(values)
  if(x){
    toast.success("Signed Up successfully",{position:"top-center",duration:3000,})
    router.push("/login")
  }
  else{
    toast.error("signup failed",{position:"top-center"})
  }
}

  const form = useForm({
    //default values for the form fields needed from the backend to avoid uncontrolled to controlled error
    defaultValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:"",
    }, 
    //resolver by zod to connect the validation schema with react hook form
    resolver: zodResolver(sginUpSchema)
  })


  return (


<>

<div className='container max-w-5xl mx-auto shadow-2xl p-5 rounded-lg mt-5'>

  
    <h1 className='text-4xl my-10 text-center '>Register</h1>


    <div>

        <form  onSubmit={form.handleSubmit(handelSignUp)} className='w-full md:w-1/2 mx-auto'>

                <Controller
                name="name"
  control={form.control}

  render={({ field, fieldState }) => (

    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name</FieldLabel>

      <Input
        {...field}
        type='text'
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your name"
        autoComplete="off"
      />
      <FieldDescription>
      </FieldDescription>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
                )}
                />

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

                <Controller
                name="rePassword"
  control={form.control}

  render={({ field, fieldState }) => (

    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Re-Password</FieldLabel>

      <Input
        {...field}
          type='password'
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your re-password"
        autoComplete="off"
      />
      <FieldDescription>
    
      </FieldDescription>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
                )}
                />

                <Controller
                name="phone"
  control={form.control}

  render={({ field, fieldState }) => (

    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone</FieldLabel>

      <Input
        {...field}
        type='tel'
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="enter your phone number"
        autoComplete="off"
      />
      <FieldDescription>
   
      </FieldDescription>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
                )}
                />

                <Button className='w-full mt-5 cursor-pointer' type='submit'>
  Sign Up
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
// import { sginUpSchema, signUpDataType } from "./schema"
// import signupAction from "@/_services/_serverActions/signup.action"
// import { toast } from "sonner"
// import { useRouter } from "next/navigation"

// export default function Page() {

// const router = useRouter()

// // signup function
// async function handleSignUp(values: signUpDataType) {


// const res = await signupAction(values)

// if (res.success) {

//   toast.success(res.message, {
//     position: "top-center",
//     duration: 3000,
//   })

//   router.push("/login")

// } else {

//   toast.error(res.message, {
//     position: "top-center",
//   })

// }


// }

// const form = useForm<signUpDataType>({
// defaultValues: {
// name: "",
// email: "",
// password: "",
// rePassword: "",
// phone: "",
// },
// resolver: zodResolver(sginUpSchema)
// })

// return (
// <> 
// <div className="container max-w-5xl mx-auto shadow-2xl p-5 rounded-lg mt-5">


//     <h1 className="text-4xl my-10 text-center">Register</h1>

//     <div>

//       <form
//         onSubmit={form.handleSubmit(handleSignUp)}
//         className="w-full md:w-1/2 mx-auto"
//       >

//         <Controller
//           name="name"
//           control={form.control}
//           render={({ field, fieldState }) => (

//             <Field data-invalid={fieldState.invalid}>
//               <FieldLabel htmlFor={field.name}>Name</FieldLabel>

//               <Input
//                 {...field}
//                 type="text"
//                 id={field.name}
//                 aria-invalid={fieldState.invalid}
//                 placeholder="enter your name"
//                 autoComplete="off"
//               />

//               <FieldDescription />
//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>

//           )}
//         />

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

//         <Controller
//           name="rePassword"
//           control={form.control}
//           render={({ field, fieldState }) => (

//             <Field data-invalid={fieldState.invalid}>
//               <FieldLabel htmlFor={field.name}>Re-Password</FieldLabel>

//               <Input
//                 {...field}
//                 type="password"
//                 id={field.name}
//                 aria-invalid={fieldState.invalid}
//                 placeholder="enter your re-password"
//                 autoComplete="off"
//               />

//               <FieldDescription />
//               {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//             </Field>

//           )}
//         />

//         <Controller
//           name="phone"
//           control={form.control}
//           render={({ field, fieldState }) => (

//             <Field data-invalid={fieldState.invalid}>
//               <FieldLabel htmlFor={field.name}>Phone</FieldLabel>

//               <Input
//                 {...field}
//                 type="tel"
//                 id={field.name}
//                 aria-invalid={fieldState.invalid}
//                 placeholder="enter your phone number"
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
//           Sign Up
//         </Button>

//       </form>

//     </div>

//   </div>
// </>

// )
// }
