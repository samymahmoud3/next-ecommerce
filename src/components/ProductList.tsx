import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href='/test' className="w-full sm:w-[45%] lg:w-[22%] rounded-md flex flex-col gap-4">
        <div className="relative w-full h-80 rounded-md">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="product"
            fill
            sizes="25vw"
            className="bg-gray-400 absolute object-cover rounded-md z-10 hover:opacity-0 transition-all ease-in-out duration-500"
          />
          <Image
            src="/woman.png"
            alt="product"
            fill
            sizes="25vw"
            className="bg-gray-400 rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          My Description
        </div>
        <button className="rounded-2xl ring-1 ring-tomato text-tomato py-2 px-4 text-xs w-max hover:bg-tomato hover:text-white">Add to Cart</button>
      </Link>
      <Link href='/test' className="w-full sm:w-[45%] lg:w-[22%] rounded-md flex flex-col gap-4">
        <div className="relative w-full h-80 rounded-md">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="product"
            fill
            sizes="25vw"
            className="bg-gray-400 absolute object-cover rounded-md z-10 hover:opacity-0 transition-all ease-in-out duration-500"
          />
          <Image
            src="/woman.png"
            alt="product"
            fill
            sizes="25vw"
            className="bg-gray-400 rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          My Description
        </div>
        <button className="rounded-2xl ring-1 ring-tomato text-tomato py-2 px-4 text-xs w-max hover:bg-tomato hover:text-white">Add to Cart</button>
      </Link>
      <Link href='/test' className="w-full sm:w-[45%] lg:w-[22%] rounded-md flex flex-col gap-4">
        <div className="relative w-full h-80 rounded-md">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="product"
            fill
            sizes="25vw"
            className="bg-gray-400 absolute object-cover rounded-md z-10 hover:opacity-0 transition-all ease-in-out duration-500"
          />
          <Image
            src="/woman.png"
            alt="product"
            fill
            sizes="25vw"
            className="bg-gray-400 rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          My Description
        </div>
        <button className="rounded-2xl ring-1 ring-tomato text-tomato py-2 px-4 text-xs w-max hover:bg-tomato hover:text-white">Add to Cart</button>
      </Link>
      <Link href='/test' className="w-full sm:w-[45%] lg:w-[22%] rounded-md flex flex-col gap-4">
        <div className="relative w-full h-80 rounded-md">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="product"
            fill
            sizes="25vw"
            className="bg-gray-400 absolute object-cover rounded-md z-10 hover:opacity-0 transition-all ease-in-out duration-500"
          />
          <Image
            src="/woman.png"
            alt="product"
            fill
            sizes="25vw"
            className="bg-gray-400 rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          My Description
        </div>
        <button className="rounded-2xl ring-1 ring-tomato text-tomato py-2 px-4 text-xs w-max hover:bg-tomato hover:text-white">Add to Cart</button>
      </Link>
    </div>
  )
};

export default ProductList