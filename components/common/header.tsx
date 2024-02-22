'use client'
import Image from "next/image";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="flex justify-evenly items-center mt-5 ">
      {/* Logo */}
      <div className="flex items-center gap-5">
        <div>
          <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
        </div>
        {/* Navigation menu with hamburger icon */}
        <div className="flex gap-3 hidden md:flex"> {/* Hide on screens smaller than medium */}
          <div onClick={handleMenuToggle}>
            <IoMenuOutline />
          </div>
          <div className="text-[#00d094]">
            카테고리
          </div>
        </div>
      </div>
      
      {/* Search bar with icon as prefix */}
      <div style={{ position: 'relative' }} className="hidden md:flex"> {/* Hide on screens smaller than medium */}
        <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px', right:'10px' }}>
          <IoIosSearch color="#000" size={20} />
        </div>
        <input
          type="text"
          placeholder="살까말까 고민된다면 검색해보세요!"
          style={{
            paddingLeft: '30px',
            height: '50px',
            width: '335px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>
      
      {/* User icon and menu */}
      <div className="flex gap-3 hidden md:flex">
        <div>
          <Image src="/assets/arrow.svg" alt="user" width={25} height={25} />
        </div>
        <div className="w-[0.7px] h-7 bg-fuchsia-300">
          {/* Vertical separator */}
        </div>
        <div>로그인 / 회원가입</div>
      </div>
    </div>
    
    );
  };
  
  export default Header;
