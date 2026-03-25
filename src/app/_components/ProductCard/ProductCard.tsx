import Image from 'next/image'
import Link from 'next/link'
import { FaRegHeart } from "react-icons/fa";
import AddToCartBtn from './AddToCartBtn';

type productPropsType = {
    product: ProductType
}


export default function ProductCard({product}: productPropsType) {

    return <>
        <div className='relative rounded-3xl shadow-2xl p-5 cursor-pointer hover:scale-105 transition-transform duration-300' key={product.id} >
            <Link href={`./ProductDetails/${product.id}`}>
                <div className=" shadow-2xl p-3 cursor-pointer" key={product.id} >

                    <Image width={300} height={300} src={product.imageCover} alt={product.title} />

                    <h2 className="text-2xl font-bold">{product.title.split(" ").slice(0, 3).join(" ")}</h2>

                    <br />
                    {product.priceAfterDiscount ? <div className='flex  items-center gap-4'>
                        <h3 className=" line-through text-red-500 text-3xl">{product.price} LE</h3>
                        <h3 className=" text-3xl">{product.priceAfterDiscount} LE</h3>
                        <h4 className='text-red-500 '>save:{((product.price - product.priceAfterDiscount) / product.price * 100).toFixed(0)}%</h4>
                        <span className='bg-red-600 text-white px-2 py-1 rounded-md absolute top-0 right-0'>
                            SALE
                        </span>
                    </div> : <h3 className='text-3xl'>{product.price} LE</h3>}
                    <p>Brand:{product.brand.name}</p>
                    <p>Category:{product.category.name}</p>
                </div>
            </Link>
            <div className='p-3 gap-1 flex justify-between items-center'>

                <AddToCartBtn productID={product.id} key={product.id}/>

                <div className=' flex justify-end mt-3 text-red-500 text-2xl cursor-pointer shadow-2xl p-1 rounded-full'>
                    <FaRegHeart />
                </div>

            </div>
        </div>
    </>
    };

