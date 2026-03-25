import { getAllProducts } from "@/_services/products.services";
import ProductCard from "./_components/ProductCard/ProductCard";

import Image1 from"@/images/slider-2.jpeg";
import Image2 from"@/images/slider-image-1.jpeg";
import Image3 from"@/images/slider-image-3.jpeg";
import Image4 from"@/images/slider-image-2.jpeg";
import Image5 from "@/images/nathalia-rosa-rWMIbqmOxrY-unsplash.jpg";
import Image6 from "@/images/nrd-D6Tu_L3chLE-unsplash.jpg";

import Slider from "./_components/slider/slider";

import CategoriesSlider from "./_components/categoriesSlider/CategoriesSlider";
import {lazy, Suspense} from "react";

//lazy loading for slider and categories slider
// 1 dynamic import 
const LazySlider = lazy(() => import("./_components/slider/slider"));
const LazyCategoriesSlider = lazy(() => import("./_components/categoriesSlider/CategoriesSlider"));



export default async function Home() {



const picList=[Image1.src,Image2.src,Image3.src,Image4.src ,Image5.src,Image6.src]

const allProducts =await  getAllProducts()


return (<>




{/* swipers */}
<Slider imagelist={picList} />




{/* //2 suspense */}
{/* //3 callback */}
<Suspense fallback={<h1 className=" w-full text-5xl text-center text-green-500 ">Loading...</h1>}>
<CategoriesSlider />
</Suspense>


{/* product Card */}
                <div className="bg-amber-100 grid lg:grid-cols-4 md:grid-cols-2  gap-3  text-black mt-4 mx-auto p-7">
                    {/* 3mlna al product card bara  */}
                    {allProducts?.map( product=>   <ProductCard key={product.id}  product={product} />)}
                </div>
            </> 
)}
