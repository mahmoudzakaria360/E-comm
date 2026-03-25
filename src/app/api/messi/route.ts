// This is an API route that handles GET requests to the /messi endpoint.
//monasb f al small projects 

import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function POST (req:NextRequest) {

let {productId} =await req.json()

    // Here you can add the logic to add the product to the cart using the productID
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {

                productId: productId},{
                headers:{
                            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDMwOWZmYjgwZTU2MTFiZWM5MTBhZSIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzcyMTk4NzE1LCJleHAiOjE3Nzk5NzQ3MTV9.q1O4Op5MUZYRp9c7qQD8ZjP5uF2zD8IlTtXE_ORr_WU"
                        }
})

return NextResponse.json(data)

}
