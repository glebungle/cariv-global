// src/components/CommonHeader.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function CommonHeader() {
  return (
    <div className="w-full sticky top-0 z-50 bg-white">
      {/* 1. 최상단 */}
      <div className="bg-primary text-white py-2.5 px-10 text-xs flex justify-between items-center font-medium">
        {/* 언어 선택*/}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="relative h-4 w-4">
            <Image src="/icons/globe.png" alt="Globe" fill className="object-contain" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="opacity-90 tracking-wide">ENG</span>
            <span className="opacity-50 text-[10px]">|</span>
            <span>영어</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80">
            <div className="relative h-4 w-4">
              <Image src="/icons/user.png" alt="User" fill className="object-contain" />
            </div>
            <span>Log In</span>
          </div>
          <span className="h-3 w-[1px] bg-white"></span> 
          <span className="cursor-pointer hover:opacity-80">Create Account</span>
          <span className="h-3 w-[1px] bg-white"></span> 
          <span className="cursor-pointer hover:opacity-80">Contact Us</span>
        </div>
      </div>

      {/* 2. 메인 헤더 영역 */}
      <div className="py-4 px-10 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-14">
          <div className="relative h-8 w-24 cursor-pointer">
            <Image src="/logo.png" alt="CARIV" fill className="object-contain" />
          </div>
          <nav className="flex gap-10 text-sm font-semibold pt-1">
            <span className="text-black border-b-2 border-black pb-4 -mb-[18px] cursor-pointer">Vehicles</span>
            <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">Auctions</span>
            <span className="text-gray-400 hover:text-black cursor-pointer transition-colors">Orders</span>
          </nav>
        </div>

        <div className="flex items-center gap-8">
          <div className="relative flex items-center bg-[#F4F4F4] rounded-full w-[480px] px-5 py-2.5 group transition-all focus-within:bg-gray-100 border border-transparent focus-within:border-gray-200 font-inter">
            <div className="relative h-4 w-4 shrink-0 mr-3">
              <Image src="/icons/search.png" alt="Search" fill className="object-contain" />
            </div>
            <input 
              type="text" 
              placeholder="Search for used car" 
              className="bg-transparent w-full text-sm outline-none text-[#3D3D3D] placeholder:text-[#3D3D3D] font-medium"
            />
          </div>
          
          {/* 마이페이지 섹션 */}
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#3D3D3D] group-hover:text-primary transition-colors">My page</span>
              <div className="w-9 h-9 bg-gray-100 rounded-full overflow-hidden relative border border-gray-200">
                <Image src="/profile.png" alt="Profile" fill className="object-cover" />
              </div>
            </div>
            <div className="text-[#333] hover:text-primary transition-colors">
              <div className="relative h-5 w-5 shrink-0 mr-3">
                <Image src="/icons/hamberger.png" alt="menu" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}