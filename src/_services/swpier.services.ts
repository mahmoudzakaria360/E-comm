export async function getAllCategories() {

try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`)
    const resData = await res.json()
    return resData.data

} catch (error) {
    console.log(error)
    return null
}

    }
