'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function MembershipPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen flex-col items-center pb-24 font-noto-arabic" dir="ltr">
      
      {/* 1. 스텝 표시 영역*/}
      <div className="mt-24 w-[800px] flex items-start justify-between">
        {[
          { step: 1, label: 'Membership' },
          { step: 2, label: 'Verify Email' },
          { step: 3, label: 'Information' },
          { step: 4, label: 'Complete' },
        ].map((item, index) => (
          <React.Fragment key={item.step}>
            <div className="flex flex-col items-center shrink-0">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-base font-bold transition-colors z-10 ${
                  item.step === 1 
                    ? 'bg-primary text-white' 
                    : 'bg-gray2 text-white' 
                }`}
              >
                {item.step}
              </div>
              <span className={`mt-3 text-[13px] font-bold ${item.step === 1 ? 'text-primary' : 'text-gray2'}`}>
                {item.label}
              </span>
            </div>

            {index < 3 && (
              <div className="h-[1px] bg-gray2 flex-1 mt-5 mx-6 self-start" /> 
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 2. 타이틀 영역 */}
      <div className="mt-16 text-center">
        <h1 className="text-[40px] font-bold text-[#333] tracking-tight">Select Membership Type</h1>
        <div className="mt-6 text-sm text-[#828282] leading-relaxed font-medium">
          Welcome to Cariv. <br />
          Become a member to enjoy exclusive benefits, special rewards, and point accumulation. <br />
          Please select your membership type below to continue with registration.
        </div>
      </div>
      <div className="mt-12 h-[1px] w-[800px] bg-[#C4C4C4]" />

      {/* 4. 카드 섹션 -그림자 수정 필요*/}
      <div className="mt-16 flex justify-center gap-10">
        <div 
          onClick={() => setSelectedType('business')}
          className={`flex w-[380px] cursor-pointer flex-col items-center rounded-[2px] bg-white p-10 transition-all duration-200 border-2 ${
            selectedType === 'business' 
              ? 'border-primary shadow-[0px_10px_30px_rgba(0,0,0,0.08)]' 
              : 'border-transparent shadow-[0px_10px_30px_rgba(0,0,0,0.08)]' 
          }`}
        >
          <h3 className="text-[18px] font-bold text-[#333]">For dealers and businesses</h3>
          <p className="mt-3 text-center text-xs text-[#828282] leading-relaxed px-2">Manage listings, vehicles, and services with professional tools.</p>
          <div className="my-10 relative h-44 w-full">
            <Image src="/membership1.png" alt="Business" fill className="object-contain" />
          </div>
          <button className="w-full rounded-[2px] bg-primary py-4 text-sm font-bold text-white transition-opacity hover:opacity-90">
            Sign Up as a Business Member
          </button>
        </div>

        <div 
          onClick={() => setSelectedType('individual')}
          className={`flex w-[380px] cursor-pointer flex-col items-center rounded-[2px] bg-white p-10 transition-all duration-200 border-2 ${
            selectedType === 'individual' 
              ? 'border-primary shadow-[0px_10px_30px_rgba(0,0,0,0.08)]' 
              : 'border-transparent shadow-[0px_10px_30px_rgba(0,0,0,0.08)]'
          }`}
        >
          <h3 className="text-[18px] font-bold text-[#333]">For individual users</h3>
          <p className="mt-3 text-center text-xs text-[#828282] leading-relaxed px-2">Explore vehicles, save favorites, and enjoy personalized services.</p>
          <div className="my-10 relative h-44 w-full">
            <Image src="/membership2.png" alt="Individual" fill className="object-contain" />
          </div>
          <button className="w-full rounded-[2px] bg-primary py-4 text-sm font-bold text-white transition-opacity hover:opacity-90">
            Sign Up as an Individual Member
          </button>
        </div>
      </div>

      {/* 5. 버튼 */}
      <div className="mt-16 flex w-[400px] flex-col gap-3">
        <button className="w-full rounded-[2px] bg-primary py-4 text-lg font-bold text-white hover:bg-primary-dark transition-colors">
          Next
        </button>
        <button className="w-full rounded-[2px] border border-[#E0E0E0] bg-[#EDEDED] py-4 text-lg font-bold text-[#828282] hover:bg-[#E5E5E5] transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}