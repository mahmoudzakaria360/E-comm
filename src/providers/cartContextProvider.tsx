// "use client"
// import getUserCart from '@/_services/_serverActions/getUserCart.action'
// import { createContext,  useEffect, useState, React  } from 'react'
// import { Dispatch, SetStateAction,  } from "react";

//  export const cartContext=   createContext({products: null, numOfCartItems: 0, cartId: null, setnumOfCartItems: Dispatch<SetStateAction<number>>})


// export default async function CartContextProvider({children}: {children: React.ReactNode}) {


// const [products, setProducts] = useState(null);
// const [numOfCartItems, setnumOfCartItems] = useState(0);
// const [cartId, setCartId] = useState(null);





// async function getData() {

// const userCart= await  getUserCart()

// console.log(userCart)

// setCartId(userCart.cartId )
// setnumOfCartItems(userCart.numOfCartItems)
// setProducts(userCart.data.products)

// }



// useEffect(() => {
//     getData()
// }, [])


//     return <>
    
    
//     <cartContext.Provider value  ={ { products, numOfCartItems , cartId, setnumOfCartItems} }>
    
//         {children}
    
//     </cartContext.Provider>

    
    
//     </>

// }

"use client";

import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from "react";
import getUserCart from '@/_services/_serverActions/getUserCart.action';

type CartContextType = {
  products: any[];
  numOfCartItems: number;
  cartId: string | null;
  setNumOfCartItems: Dispatch<SetStateAction<number>> ;
  updateCart: (cartData: { numOfCartItems: number; cartId: string; products: any[] }) => void;
};

// إنشاء context
export const cartContext = createContext<CartContextType | null>(null);

export default function CartContextProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<any[]>([]);
  const [numOfCartItems, setNumOfCartItems] = useState<number>(0);
  const [cartId, setCartId] = useState<string | null>(null);

  // تحديث cart state كامل
  const updateCart = (cartData: { numOfCartItems: number; cartId: string; products: any[] }) => {
    setNumOfCartItems(cartData.numOfCartItems);
    setCartId(cartData.cartId);
    setProducts(cartData.products);
  };

  // fetch initial cart data
  useEffect(() => {
    async function getData() {
      try {
        const userCart = await getUserCart();
        updateCart({
          numOfCartItems: userCart.numOfCartItems,
          cartId: userCart.cartId,
          products: userCart.data.products
        });
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    }
    getData();
  }, []);

  return (
    <cartContext.Provider value={{ products, numOfCartItems, cartId, setNumOfCartItems, updateCart }}>
      {children}
    </cartContext.Provider>
  );
}