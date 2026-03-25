"use client"
import { SessionProvider } from 'next-auth/react'
import CartContextProvider from './cartContextProvider'


export default function MySessionPrividers({children}: {children: React.ReactNode}) {


  return<>
          <SessionProvider>
            <CartContextProvider>
              {children}
            </CartContextProvider>
          </SessionProvider>
        </>
}
