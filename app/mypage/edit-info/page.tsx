'use client';

import React from 'react';
import Image from 'next/image';

export default function EditPersonalInfoPage() {
  return (
    <div className="flex-1 px-12 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-black text-font">Edit Personal Information</h1>
        <p className="text-sm text-font mt-1">Saved on 20xx.xx.xx</p>
      </header>

      <section className="bg-white border border-[#787878] rounded-xs p-12 shadow-sm">
        <div className="space-y-1">
          <EditRow label="Email" value="forwardmax1234@gmail.com" hasIcon required />
          <EditRow label="Full Name" value="KIM MINJIN" hasIcon required />

          <div className="flex py-6 border-b border-gray-100 items-center">
            <span className="w-40 text-[13px] font-bold text-gray-800 shrink-0">Date of Birth<span className="text-red-500 ml-1">*</span></span>
            <div className="flex gap-4 items-center">
              <select className="border border-gray-200 rounded px-4 py-2 text-xs bg-white w-28 focus:border-primary outline-none">
                <option>2xxxx</option>
              </select>
              <span className="text-sm text-[#5A5A5A]">Year</span>
              <select className="border border-gray-200 rounded px-4 py-2 text-xs bg-white w-20 focus:border-primary outline-none">
                <option>xx</option>
              </select>
              <span className="text-sm text-[#5A5A5A]">Month</span>
              <select className="border border-gray-200 rounded px-4 py-2 text-xs bg-white w-20 focus:border-primary outline-none">
                <option>xx</option>
              </select>
              <span className="text-sm text-[#5A5A5A]">Day</span>
            </div>
          </div>

          <div className="flex py-6 border-b border-gray-100 items-center">
            <span className="w-40 text-[13px] font-bold text-gray-800 shrink-0">Nationality<span className="text-red-500 ml-1">*</span></span>
            <div className="relative w-48">
              <div className="absolute left-3 top-3 w-3 h-3 pointer-events-none">
                <Image 
                  src="/icons/search.png" 
                  alt="search" 
                  fill 
                  className="object-contain" 
                />
              </div>

              <select className="w-full border border-gray-200 rounded px-9 py-2 text-xs bg-white focus:border-primary outline-none appearance-none font-medium text-[#333]">
                <option>Republic of Korea</option>
              </select>

              <div className="absolute right-3 top-3 pointer-events-none">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeWidth="3"/>
                </svg>
              </div>
            </div>
          </div>

          <EditRow label="Mobile Number" value="+82 1111-1111" hasIcon required />

          <div className="flex py-8 items-start">
            <span className="w-40 text-[13px] font-bold text-gray-800 shrink-0 pt-2">Residential Address<span className="text-red-500 ml-1">*</span></span>
            <div className="flex-1 max-w-xl space-y-3">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <input 
                    value="Republic of Korea" 
                    readOnly 
                    className="w-full border border-[#BDBDBD]/20 rounded-sm px-4 py-2.5 text-xs bg-[#F8F7F7] focus:border-primary focus:bg-white outline-none font-medium transition-all shadow-sm" 
                  />
                  <div className="absolute right-3 top-3 cursor-pointer ">
                    <div className="relative h-[13px] w-[13px]">
                      <Image 
                        src="/icons/edit.png" 
                        alt="edit" 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                  </div>
                </div>
                <button className="bg-primary text-white text-[11px] font-bold font-pretendard px-6 py-2 rounded-sm hover:bg-primary-dark whitespace-nowrap">Search Postal Code</button>
              </div>
              <input value="Gangnam-gu, Seoul, 06133," className="w-full border border-gray-200 rounded px-4 py-2 text-xs bg-[#F4F4F4] outline-none" readOnly />
              <input value="456, 123 Teheran-ro," className="w-full border border-gray-200 rounded px-4 py-2 text-xs bg-[#F4F4F4] outline-none" readOnly />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <button className="bg-primary text-white px-12 py-3 rounded-lg text-sm font-bold shadow-lg hover:bg-primary-dark">Save</button>
        </div>
      </section>
    </div>
  );
}

function EditRow({ label, value, hasIcon, required }: { label: string; value: string; hasIcon?: boolean; required?: boolean }) {
  return (
    <div className="flex py-6 border-b border-gray-100 items-center">
      <span className="w-40 text-[13px] font-bold text-gray-800 shrink-0">{label}{required && <span className="text-red-500 ml-1">*</span>}</span>
      <div className="relative flex-1 max-w-md">
        <input 
          defaultValue={value}
          className="w-full border border-[#BDBDBD]/20 rounded-sm px-4 py-2.5 text-xs bg-[#F8F7F7] focus:border-primary focus:bg-white outline-none font-medium transition-all shadow-sm"
        />
        {hasIcon && (
          <div className="absolute right-3 top-3 cursor-pointer">
            <div className="relative h-[13px] w-[13px] cursor-pointer transition-opacity hover:opacity-80">
              <Image 
                src="/icons/edit.png" 
                alt="edit" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}