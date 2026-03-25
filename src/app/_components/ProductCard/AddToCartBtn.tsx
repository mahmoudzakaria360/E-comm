"use client"
import { Button } from '@/components/ui/button'
import { cartContext } from '@/providers/cartContextProvider'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { LiaCartArrowDownSolid } from 'react-icons/lia'
import { toast } from 'sonner'




type AddToCartBtnProps = {
    productID: string
}

    
export default function AddToCartBtn( {productID}:AddToCartBtnProps) {

const { setNumOfCartItems }= useContext(cartContext)



    const [loading, setloading] = useState(false);

    async function addToCart() {

        // console.log("id",productID);

    // Here you can add the logic to add the product to the cart using the productID
    setloading(true);
    let {data} = await axios.post(`http://localhost:3000/api/messi`, {productId: productID})

    console.log(data);
    if(data.status==="success"){
        toast.success("Product added to cart successfully!",{position:"top-center"} )
    } else {
        toast.error("Failed to add product to cart.")
        
        setNumOfCartItems(data.numOfCartItems)
    }
    setloading(false);
}

return (
                <Button onClick={addToCart} type="button" className='bg-amber-400 flex text-xl text-center gap-4 items-center  p-3 rounded-md shadow-2xl w-full mt-5  cursor-pointer' disabled={loading}>
                    {loading ? <><Loader2 className="animate-spin mr-1 text-black " /> Adding to Cart...</> : "Add to Cart"} <LiaCartArrowDownSolid className='text-center  text-blue-800 text-xl' />
                </Button>
)
}
