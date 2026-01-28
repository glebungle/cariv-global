'use client';

import React, { useState } from 'react';

export default function InquiryListPage() {
  const [activeTab, setActiveTab] = useState('1:1 Inquiry');
  const [dateRange, setDateRange] = useState('7 Days');

  return (
    <div className="flex-1 px-12 py-10">

      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#333]">Submit a 1:1 Inquiry</h1>
      </header>

      <section className="bg-[#F0F7FF] rounded-xs p-10 flex justify-between items-center mb-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-[#333]">If you have any questions, feel free to contact us anytime.</h2>
          <p className="text-sm text-[#5A5A5A] font-medium">Submit your inquiry and we'll respond as soon as possible.</p>
        </div>
        
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src="/icons/inquiry.png" alt="icon" className="w-5 h-5" />
              <span className="text-sm text-[#828282] font-medium w-32">Customer Support</span>
              <span className="text-sm font-bold text-[#333] font-inter">02-1111-1111</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#828282] font-medium w-32 ml-8">Weekdays</span>
              <span className="text-sm font-bold text-[#299BFF] font-inter">AM 9:00 ~ PM 18:00</span>
            </div>
          </div>
          <button className="bg-[#299BFF] text-white px-8 py-2.5 rounded-xs text-sm font-bold hover:bg-[#1E86E5] transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      <div className="flex gap-10 border-b border-gray-200 mb-8">
        {['1:1 Inquiry', 'Customer Support', 'FAQ'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === tab ? 'text-[#299BFF]' : 'text-gray-400'
            }`}
          >
            {tab}
            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#299BFF]" />}
          </button>
        ))}
      </div>

      <div className="bg-[#F8F8F8] p-6 rounded-xs flex items-center gap-6 mb-10">
        <span className="text-sm font-bold text-[#333]">Date Range</span>
        
        <div className="flex gap-2">
          {['Today', '7 Days', '15 Days', '1 Month', '3 Months', '1 Year'].map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range)}
              className={`px-4 py-2 text-xs font-bold rounded-xs border transition-all ${
                dateRange === range 
                  ? 'bg-[#299BFF] border-[#299BFF] text-white' 
                  : 'bg-white border-gray-200 text-gray-500 hover:border-[#299BFF]'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xs">
            <span className="text-xs text-[#333] font-inter">20xx.xx.xx</span>
            <img src="/icons/calendar.png" alt="cal" className="w-4 h-4 opacity-40" />
          </div>
          <span className="text-gray-400">-</span>
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xs">
            <span className="text-xs text-[#333] font-inter">20xx.xx.xx</span>
            <img src="/icons/calendar.png" alt="cal" className="w-4 h-4 opacity-40" />
          </div>
          <button className="bg-[#299BFF] p-2.5 rounded-full hover:bg-[#1E86E5] shadow-sm">
             <img src="/icons/search.png" alt="search" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="flex py-4 border-b border-gray-200 text-sm font-bold text-gray-400 text-center">
          <span className="w-32">Inquiry Date</span>
          <span className="w-40">Category</span>
          <span className="flex-1">Subject</span>
          <span className="w-32">Inquiry Status</span>
          <span className="w-32">Response Time</span>
        </div>

        <div className="flex flex-col items-center justify-center py-32">
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 bg-[#D9EEFF] rounded-full opacity-50" />
            <img src="/inquiry.png" alt="none" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-[#333] mb-1">0 Inquiries</h3>
          <p className="text-sm text-gray-400">No inquiries found.</p>
        </div>
      </div>
    </div>
  );
}