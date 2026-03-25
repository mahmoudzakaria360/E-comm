import { getAllCategories } from '@/_services/swpier.services'
import React from 'react'
import Slider from '../slider/slider'





export default async function CategoriesSlider() {
let categoriesData=  await getAllCategories()


let categoriesImages=categoriesData?.map((cat: any)=>cat.image)


    return (
        <div className="w-full overflow-x-auto py-4">
            <Slider imagelist={categoriesImages}  slidesPerView={4} spaceBetween={10}/>
        </div>
    )
}
