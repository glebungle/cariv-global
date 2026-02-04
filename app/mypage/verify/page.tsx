'use client';

import React from 'react';
import Image from 'next/image';

export default function ProfileManagementPage() {
  return (
    <div className="flex-1 px-12 py-10">
      <header className="mb-6">
        <h1 className="text-[23px] font-black text-font">Profile Management</h1>
        <p className="text-[14px] text-font mt-1 font-medium">Saved on 20xx.xx.xx</p>
      </header>

      <div className="relative bg-white border border-[#787878] rounded- shadow-sm overflow-visible">
        
        <div className="absolute -top-4 right-12 flex flex-col items-center z-20">
          <div className="bg-[#299BFF] text-white text-font text-[11px] font-medium px-4 py-1.5 rounded-sm shadow-md">
            Last Updated: 20xx.xx.xx
          </div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#299BFF] -mt-0.5 ml-[-60px]"></div>
        </div>

        <div className="p-10 flex items-center min-h-[220px]">
          <div className="flex items-center gap-12 flex-1">
            {/* 프로필 이미지 */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 rounded-full bg-[#E8F3FF] border border-[#3D3D3D]/30 overflow-hidden relative">
                <Image src="/profile.png" alt="Profile" fill className="object-cover" />
              </div>
              <div className="absolute bottom-1 right-1 bg-white rounded-full p-1.5 shadow-md border border-[#3D3D3D]/30 cursor-pointer">
                  <div className="relative h-[18px] w-[18px] cursor-pointer transition-opacity hover:opacity-80">
                        <Image 
                          src="/icons/setting.png" 
                          alt="edit" 
                          fill 
                          className="object-contain" 
                        />
                    </div>
              </div>
            </div>
            
            <div className="flex-1 pr-5">
              <div className="flex items-center gap-6 mb-3 whitespace-nowrap">
                <h3 className="text-[23px] font-black text-font">Minjin Kim</h3>
                <button className="text-[14px] text-font flex items-center gap-1 hover:text-[#3D3D3D] transition-colors font-medium">
                  Account Management <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
              <p className="text-sm text-font mb-3 font-medium">Sole Proprietor</p>
              
              <div className='flex items-center gap-2 text-sm font-medium text-font transition-all'>
                Add My Vehicle <button className="flex h-6 w-6 items-center justify-center rounded-full border-[0.25px] border-font bg-white text-xl font-light leading-none text-font">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center border-l border-font pl-4 h-32 shrink-0">
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-8 text-[14px] items-center">
                  <span className="text-font font-medium w-32">Membership Type</span>
                  <span className="font-black text-font whitespace-nowrap">Sole Proprietor</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#C4C4C4]" />

        {/* --- 상세 정보 영역 --- */}
        <div className="p-12">
          <div className="flex justify-between items-center mb-12">
            <h4 className="text-[22px] font-black text-font">Hello, this is Minjin Kim.</h4>
            <button className="bg-[#299BFF] text-white px-10 py-2.5 rounded-sm text-[15px] font-bold hover:bg-[#1E86E5] shadow-sm transition-colors">
              Edit
            </button>
          </div>

          <div className="flex flex-col">
            <InfoRow label="Email" value="forwardmax1234@gmail.com" />
            <InfoRow label="Full Name" value="KIM MINJIN" />
            <InfoRow label="Date of Birth" value="Year: 2xxxx  Month: xx  Day: xx" isInter />
            <InfoRow label="Nationality" value="Republic of Korea" />
            <InfoRow label="Mobile Number" value="+82 1111-1111" isInter />
            <InfoRow label="Residential Address" value="456, 123 Teheran-ro, Gangnam-gu, Seoul, 06133, Republic of Korea" />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value, isInter = false }: { label: string; value: string; isInter?: boolean }) {
  return (
    <div className="flex py-9 border-b border-[#C4C4C4] last:border-none items-center">
      <span className="w-64 text-[14px] font-pretendard font-bold text-[#5A5A5A] shrink-0">{label}</span>
      <span className={`text-[14px] text-[#5A5A5A] font-medium ${isInter ? 'font-inter' : ''}`}>
        {value}
      </span>
    </div>
  );
}