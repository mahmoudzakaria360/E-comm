 "use client";

import { Button } from "@/components/ui/button";
import logo from "@/images/freshcart-logo.svg";
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from "react";
import { cartContext } from "@/providers/cartContextProvider";
import { IoPerson } from 'react-icons/io5';
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  const session = useSession();
  const cartData = useContext(cartContext);

  function handelLogOut() {
    signOut({ redirect: true, callbackUrl: '/login' });
  }

  return (
    <nav className='flex justify-between bg-emerald-200 text-black p-4 items-center'>
      {/* navLeft */}
      <div className='flex items-center justify-start pl-4 space-x-4'>
        <Link href={"/"}>
          <Image src={logo} alt='fresh cart logo' />
        </Link>
        <ul className='flex gap-2.5 items-center pl-3'>
          <li className='text-xl font-bold'>
            <Link href={"/"}>Home</Link>
          </li>
          <li className='text-xl font-bold relative'>
            <Badge className="absolute -top-5 -left-2 text-xs">{cartData?.numOfCartItems}</Badge>
            <Link href={"/cart"}>Cart</Link>
          </li>
          <li className='text-xl font-bold'>
            <Link href={"/categories"}>Categories</Link>
          </li>
        </ul>
      </div>

      {/* navRight */}
      <div className='flex items-center justify-center'>
        {session.data ? (
          <Button onClick={handelLogOut}>logOUT</Button>
        ) : (
          <ul className='flex gap-4 pr-3'>
            <li>
              <Link className='flex items-center gap-1' href={"/login"}>Login <IoPerson /></Link>
            </li>
            <li>
              <Link className='flex items-center gap-1' href={"/signup"}>Signup <IoPerson /></Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}