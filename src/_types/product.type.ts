type ProductType = {
    id: string;
    imageCover: string;
    price: number;
    priceAfterDiscount?: number;
    title: string;
    description: string;
    brand:BrandType
    category:CategoryType
ratingsAverage?:number

}




type BrandType={
    _id: string,
    name: string,
    slug: string,
    image:string,
}

type CategoryType={
    _id: string,
    name: string,
    slug: string,
    image:string,
}