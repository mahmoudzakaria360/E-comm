"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//  Import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper/modules"

type imageListType={
    imagelist:string [],
    spaceBetween?:number,
    slidesPerView?:number,
}
export default function Slider({imagelist,spaceBetween,slidesPerView}:imageListType) {

return (<>
    <Swiper
    modules={[Autoplay]}
    autoplay={{
        delay: 3500,
        disableOnInteraction: true,
    }}
    loop={true}
    spaceBetween={spaceBetween}
    slidesPerView={slidesPerView}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
    >

{imagelist.map((image)=><SwiperSlide  key={image} >
                                <img className='w-full h-112.5 object-center' src={image} alt="product images" />
                        </SwiperSlide>)}
    </Swiper>

    </>
)}


