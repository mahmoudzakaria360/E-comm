import { getProduct } from '@/_services/products.services';
import AddToCartBtn from '@/app/_components/ProductCard/AddToCartBtn';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";

type PropsDataType={
  params:{
    id:string
}}

// 1 props
export default async function productDetails(props:PropsDataType) {
//2 log ll props
console.log(props);
//3 await 3ala al prmas 3shan ageb al id  w ab3to ll api "endpoint"
  const data= await props.params

console.log(data.id);



const item= await getProduct(data.id)



  return (
<>
<div className='container grid grid-cols-4 gap-4 items-center justify-between m-5 mx-auto  p-5 rounded-lg shadow-2xl'>

    <div className='col-span-1 pl-3.5'>
      <Image width={300} height={300} src={item?.imageCover as string} alt={item?.title as string}/>
    </div>

    <div className='col-span-3'>
        <h1 className='text-3xl '>{item?.title}</h1>
        <h1 className='text-xl '>Material:({item?.description})</h1>
        <br />
        <br />

        {item?.priceAfterDiscount? 
          <>
              <h3 className=" text-3xl">{item?.priceAfterDiscount} LE</h3> 
              <h3 className=" line-through text-red-500 text-2xl">{item?.price} LE</h3> 
          </>
        : <h3>{item?.price} LE</h3>}
        
        <h5 className='text-lg'> BRAND/ {item?.brand.name}</h5>
        <h5 className='text-lg'> CAT/ {item?.category.name}</h5>
        <h5 className='flex items-center gap-1'><FaStar className='text-yellow-400 '/> {item?.ratingsAverage}</h5>
        <AddToCartBtn productID={item?.id as string} />
    </div>
</div>
</>
  )
}

