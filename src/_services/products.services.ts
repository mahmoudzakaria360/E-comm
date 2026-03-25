

export async function getAllProducts(): Promise < ProductType [] |null > {

try {
      const res=await fetch(`https://ecommerce.routemisr.com/api/v1/products`,
        
      )

      const resData= await res.json()

      console.log(resData.data);
    
      return resData.data

} catch ( error) {

  console.log(error,"error");
  return null
}

    }



    // get spacific product api
    export async function getProduct(id:string): Promise < ProductType  |null > {

try {
      const res=await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`,{
        cache:'force-cache'
      }
        
      )

      const resData= await res.json()

      console.log(resData.data);
    
      return resData.data

} catch ( error) {

  console.log(error,"error");
  return null
}

    }