'use client';

import React from 'react';
import Image from 'next/image';

export default function ProfileManagementPage() {
  return (
    <div className="flex-1 px-12 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-[#333]">Profile Management</h1>
        <p className="text-sm text-gray-400 mt-1 font-inter">Saved on 20xx.xx.xx</p>
      </header>
      <section className="relative bg-white border border-[#787878] rounded-xs p-10 flex items-center shadow-sm mb-10 min-h-[220px]">

        <div className="absolute -top-4 right-12 flex flex-col items-center">
          <div className="bg-[#299BFF] text-white text-[11px] font-bold px-4 py-1.5 rounded-xs shadow-md font-inter">
            Last Updated: 20xx.xx.xx
          </div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#299BFF] -mt-0.5 ml-[-60px]"></div>
        </div>

        <div className="flex items-center gap-12 flex-1">
          <div className="relative shrink-0">
            <div className="w-32 h-32 rounded-full bg-[#E8F3FF] border border-gray-100 overflow-hidden relative">
              <Image src="/profile.png" alt="Profile" fill className="object-cover" />
            </div>
            <div className="absolute bottom-1 right-1 bg-white rounded-full p-1.5 shadow-md border border-gray-100 cursor-pointer">
               <svg width="18" height="18" fill="none" stroke="#666" viewBox="0 0 24 24">
                 <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" strokeWidth="2"/>
                 <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" strokeWidth="1.5"/>
               </svg>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-3">
              <h3 className="text-[28px] font-extrabold text-[#333]">Minjin Kim</h3>
              <button className="text-[13px] text-gray-500 flex items-center gap-1 hover:text-[#299BFF] transition-colors font-medium">
                Account Management <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
            <p className="text-[15px] text-gray-400 mb-5 font-medium">Sole Proprietor | Member for 2 Years</p>
            <button className="flex items-center gap-2 text-[13px] font-bold text-gray-700 border border-gray-200 px-5 py-2 rounded-full hover:bg-gray-50">
              Add My Vehicle <span className="text-xl leading-none text-[#299BFF] ml-1">+</span>
            </button>
          </div>
        </div>

        <div className="flex items-center border-l border-gray-200 pl-16 h-32 shrink-0">
          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-12 text-[14px] items-center">
                <span className="text-gray-400 font-medium w-32">Membership Type</span>
                <span className="font-extrabold text-[#333] whitespace-nowrap">Sole Proprietor</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border border-[#787878] rounded-xs p-12 shadow-sm">
        <div className="flex justify-between items-center mb-12">
          <h4 className="text-[22px] font-bold text-[#333]">Hello, this is Minjin Kim.</h4>
          <button className="bg-[#299BFF] text-white px-12 py-3 rounded-xs text-[15px] font-bold hover:bg-[#1E86E5] shadow-sm transition-colors">
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
      </section>
    </div>
  );
}

function InfoRow({ label, value, isInter = false }: { label: string; value: string; isInter?: boolean }) {
  return (
    <div className="flex py-8 border-b border-gray-100 last:border-none items-center">
      <span className="w-64 text-[14px] font-bold text-gray-400 shrink-0">{label}</span>
      <span className={`text-[14px] text-[#333] font-extrabold ${isInter ? 'font-inter' : ''}`}>
        {value}
      </span>
    </div>
  );
}