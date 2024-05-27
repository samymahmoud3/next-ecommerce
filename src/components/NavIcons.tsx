'use client'

import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  // TEMPORARY
  const isLoggedIn = false;
  
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push('/login')
    }
    setIsProfileOpen((prev) => !prev);

    if(setIsCartOpen) {
      setIsCartOpen(false);
    }
  }

  const handleCart = () => {
    setIsCartOpen((prev) => !prev);

    if(setIsProfileOpen) {
      setIsProfileOpen(false);
    }
  }

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src='/profile.png'
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-3 top-12 -left-5 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href='/'>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src='/notification.png'
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src='/cart.png'
          alt="cart"
          width={22}
          height={22}
          onClick={handleCart}
        />
        <div className="absolute -top-3 -right-3 w-5 h-5 bg-tomato rounded-full text-white text-sm flex items-center justify-center">2</div>
      </div>
      {isCartOpen && (
        <CartModal />
      )}
    </div>
  )
};

export default NavIcons