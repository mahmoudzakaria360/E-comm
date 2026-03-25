import { nextAuthConfig } from "@/lib/next.auth.config"
import NextAuth from "next-auth"

const handelr = NextAuth(nextAuthConfig)



 export{handelr as GET,handelr as POST}