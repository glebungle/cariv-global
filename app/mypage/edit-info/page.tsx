'use client';

import React from 'react';

export default function EditPersonalInfoPage() {
  return (
    <div className="flex-1 px-12 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-[#333]">Edit Personal Information</h1>
        <p className="text-sm text-gray-400 mt-1 font-inter">Saved on 20xx.xx.xx</p>
      </header>

      <section className="bg-white border border-[#787878] rounded-xs p-12 shadow-sm">
        <div className="space-y-1">
          <EditRow label="Email" value="forwardmax1234@gmail.com" hasIcon required />
          <EditRow label="Full Name" value="KIM MINJIN" hasIcon required />

          <div className="flex py-6 border-b border-gray-100 items-center">
            <span className="w-56 text-[13px] font-bold text-gray-800 shrink-0">Date of Birth<span className="text-red-500 ml-1">*</span></span>
            <div className="flex gap-4 items-center">
              <select className="border border-gray-200 rounded px-4 py-2 text-xs bg-white w-28 focus:border-primary outline-none">
                <option>2xxxx</option>
              </select>
              <span className="text-xs text-gray-400">Year</span>
              <select className="border border-gray-200 rounded px-4 py-2 text-xs bg-white w-20 focus:border-primary outline-none">
                <option>xx</option>
              </select>
              <span className="text-xs text-gray-400">Month</span>
              <select className="border border-gray-200 rounded px-4 py-2 text-xs bg-white w-20 focus:border-primary outline-none">
                <option>xx</option>
              </select>
              <span className="text-xs text-gray-400">Day</span>
            </div>
          </div>

          <div className="flex py-6 border-b border-gray-100 items-center">
            <span className="w-56 text-[13px] font-bold text-gray-800 shrink-0">Nationality<span className="text-red-500 ml-1">*</span></span>
            <div className="relative">
               <select className="border border-gray-200 rounded px-4 py-2 text-xs bg-white w-48 focus:border-primary outline-none appearance-none">
                <option>Republic of Korea</option>
              </select>
              <svg className="absolute right-3 top-3 w-3 h-3 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3"/></svg>
            </div>
          </div>

          <EditRow label="Mobile Number" value="+82 1111-1111" hasIcon required />

          <div className="flex py-8 items-start">
            <span className="w-56 text-[13px] font-bold text-gray-800 shrink-0 pt-2">Residential Address<span className="text-red-500 ml-1">*</span></span>
            <div className="flex-1 max-w-xl space-y-3">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <input value="Republic of Korea" readOnly className="w-full border border-gray-200 rounded px-4 py-2 text-xs bg-gray-50 outline-none" />
                  <div className="absolute right-3 top-2.5"><svg width="14" height="14" fill="none" stroke="#999" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2"/></svg></div>
                </div>
                <button className="bg-primary text-white text-[11px] font-bold px-6 py-2 rounded hover:bg-primary-dark whitespace-nowrap">Search Postal Code</button>
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
      <span className="w-56 text-[13px] font-bold text-gray-800 shrink-0">{label}{required && <span className="text-red-500 ml-1">*</span>}</span>
      <div className="relative flex-1 max-w-md">
        <input 
          defaultValue={value}
          className="w-full border border-gray-100 rounded-xs px-4 py-2.5 text-xs bg-[#F4F4F4] focus:border-primary focus:bg-white outline-none font-medium transition-all"
        />
        {hasIcon && (
          <div className="absolute right-3 top-3 cursor-pointer opacity-40 hover:opacity-100">
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2"/></svg>
          </div>
        )}
      </div>
    </div>
  );
}