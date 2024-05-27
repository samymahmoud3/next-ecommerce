'use client'

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 -right-5 lg:right-[-3.5rem] flex flex-col gap-6 z-20 max-h-[calc(100vh-100px)] overflow-y-auto">
      {!cartItems ? (
        <div className="">Cart is Empty f</div>
      )
        : (
          <>
            <h2 className="text-xl">Shopping Cart</h2>
            {/* LIST */}
            <div className="flex flex-col gap-8">
              {/* ITEM */}
              <div className="flex items-center gap-4">
                <Image
                  src='https://cdn.pixabay.com/photo/2024/03/31/06/16/bird-8666099_640.jpg'
                  alt="item_img"
                  width={72}
                  height={136}
                  className="object-cover rounded-md bg-gray-200"
                />

                <div className="flex flex-col justify-between gap-8 w-full">
                  {/* TOP */}
                  <div className="">
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-16">
                      <h3 className="font-semibold">Product Name</h3>
                      <div className="p-1 bg-gray-100 rounded-md">$55</div>
                    </div>
                    {/* DESC */}
                    <div className="text-sm text-gray-500">available</div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500 cursor-pointer">Remove</span>
                  </div>
                </div>
              </div>
              {/* ITEM */}
              <div className="flex items-center gap-4">
                <Image
                  src='https://cdn.pixabay.com/photo/2024/03/31/06/16/bird-8666099_640.jpg'
                  alt="item_img"
                  width={72}
                  height={136}
                  className="object-cover rounded-md bg-gray-200"
                />

                <div className="flex flex-col justify-between gap-8 w-full">
                  {/* TOP */}
                  <div className="">
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-16">
                      <h3 className="font-semibold">Product Name</h3>
                      <div className="p-1 bg-gray-100 rounded-md">$55</div>
                    </div>
                    {/* DESC */}
                    <div className="text-sm text-gray-500">available</div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500 cursor-pointer">Remove</span>
                  </div>
                </div>
              </div>
            </div>
            {/* BOTTOM */}
            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span >Subtotal</span>
                <span className="p-1 bg-gray-100 rounded-md font-medium">$55</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
              </div>
            </div>
          </>
        )}
    </div>
  )
};

export default CartModal