// 
"use server";
import { cookies } from 'next/headers';
import axios from "axios";
import { decode } from 'next-auth/jwt';

// fetch token from cookies & decode JWT
export async function getUserToken() {
  const myCookies = await cookies();
  const tokenFromCookies = myCookies.get("next-auth.session-token")?.value;

  const decodedJwt = await decode({
    token: tokenFromCookies,
    secret: process.env.NEXTAUTH_SECRET!
  });

  return decodedJwt?.userTokenFromBackEnd;
}

// add item to cart
export async function addItemToCart(productId: string) {
  const lastToken = await getUserToken();

  const { data } = await axios.post(
    `https://ecommerce.routemisr.com/api/v1/cart`,
    { productId },
    {
      headers: {
        token: lastToken as string
      }
    }
  );

  return data;
}