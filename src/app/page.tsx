import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-[13rem]">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        <ProductList/>
      </div>
      <div className="mt-24">
        <h1 className="px-4 mb-12 text-2xl font-semibold">Categories</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-[13rem]">
        <h1 className="text-2xl font-semibold">New Products</h1>
        <ProductList/>
      </div>
    </div>
  )
}

export default HomePage