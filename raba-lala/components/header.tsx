import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 shadow m-auto">
      
      {/* Logo */}
      <div>
        <Image 
          src="/rabalogo.png" 
          alt="Raba Logo" 
          width={120} 
          height={40} 
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-16 text-gray-700 font-bold">
        <span>About Us</span>
        <span>Company</span>
        <span>Community</span>
        <span>Support</span>
      </nav>

      {/* Button */}
      <button className="px-5 py-2 bg-[#EC5C28] text-white rounded-full">
        Join Raba
      </button>

    </header>
  )
}

export default Header
