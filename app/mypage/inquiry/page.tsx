'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// FAQ 데이터 예시
const FAQ_DATA = [
  { id: 1, category: 'Account', question: 'What is ForwardMax Buyer?', answer: 'ForwardMax Buyer is a used vehicle trading platform for international buyers, allowing users to search auction vehicles and fixed-price listings, and manage the entire process including purchase, payment, shipping, logistics, documentation, and transaction status tracking.' },
  { id: 2, category: 'Account', question: 'Can individuals use the service?', answer: '' },
  { id: 3, category: 'Vehicle', question: 'How reliable is the vehicle information?', answer: '.' },
];

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('1:1 Inquiry'); 
  const [faqCategory, setFaqCategory] = useState('Overview');
  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(null);
  const [dateRange, setDateRange] = useState('7 Days');

  const faqCategories = ['Overview', 'Account', 'Vehicle', 'Pricing', 'Purchasing', 'Payment', 'Order', 'Documents', 'Claims', 'Support'];

  return (
    <div className="flex-1 px-12 py-10">
      {/* 1. 헤더 */}
      <header className="mb-8">
        <h1 className="text-2xl font-black text-font">Submit a 1:1 Inquiry</h1>
      </header>

      {/* 2. 상단 컨택 배너 ) */}
      <section className="bg-[#F0F7FF] rounded-xs p-10 flex justify-between items-center mb-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-[#333]">If you have any questions, feel free to contact us anytime.</h2>
          <p className="text-sm text-[#5A5A5A] font-medium">Submit your inquiry and we'll respond as soon as possible.</p>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="relative w-5 h-5"><Image src="/icons/inquiry.png" alt="icon" fill /></div>
              <span className="text-sm text-[#828282] font-medium w-32">Customer Support</span>
              <span className="text-sm font-bold text-[#333] font-inter">02-1111-1111</span>
            </div>
            <div className="flex items-center gap-3 ml-8">
              <span className="text-sm text-[#828282] font-medium w-32">Weekdays</span>
              <span className="text-sm font-bold text-[#299BFF] font-inter">AM 9:00 ~ PM 18:00</span>
            </div>
          </div>
          <button className="bg-[#299BFF] text-white px-8 py-2.5 rounded-xs text-sm font-bold hover:bg-[#1E86E5] shadow-sm transition-colors">Contact Us</button>
        </div>
      </section>

      {/* 3. 메인 탭 메뉴 */}
      <div className="flex gap-10 border-b border-gray-200 mb-8">
        {['1:1 Inquiry', 'Customer Support', 'FAQ'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-sm font-bold relative transition-all ${activeTab === tab ? 'text-[#299BFF]' : 'text-gray-400'}`}>
            {tab}
            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#299BFF]" />}
          </button>
        ))}
      </div>

      {/* 4. 탭별 컨텐츠 */}
      {activeTab === '1:1 Inquiry' && (
        <InquirySection dateRange={dateRange} setDateRange={setDateRange} />
      )}

      {activeTab === 'Customer Support' && (
        <CustomerSection dateRange={dateRange} setDateRange={setDateRange} />
      )}

      {activeTab === 'FAQ' && (
        <FaqSection 
          categories={faqCategories} 
          selectedCat={faqCategory} 
          setCat={setFaqCategory} 
          expandedId={expandedFaqId} 
          setExpandedId={setExpandedFaqId} 
        />
      )}
    </div>
  );
}

// --- 1:1 Inquiry 섹션 컴포넌트 ---
function InquirySection({ dateRange, setDateRange }: any) {
  return (
    <>
      <div className="bg-[#F8F8F8] pr-6 rounded-xs flex items-center gap-2 mb-10">
        <span className="text-sm font-bold text-[#333] whitespace-nowrap">Date Range</span>
        
        <div className="bg-white w-111 rounded-full p-1 flex items-center shadow-sm">
          {['Today', '7 Days', '15 Days', '1 Month', '3 Months', '1 Year'].map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range)}
              className={`px-4 py-2 text-xs font-bold transition-all ${
                dateRange === range 
                  ? 'bg-[#299BFF] text-white rounded-full' 
                  : 'text-[#333] hover:text-[#299BFF]'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xs text-xs font-inter text-[#333]">20xx.xx.xx <Image src="/icons/calendar.png" alt="cal" width={18} height={18} className="opacity-100" /></div>
          <span className="text-gray-400">-</span>
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xs text-xs font-inter text-[#333]">20xx.xx.xx <Image src="/icons/calendar.png" alt="cal" width={18} height={18} className="opacity-100" /></div>
          <button className="bg-[#299BFF] p-2.5 rounded-full hover:bg-[#1E86E5] shadow-sm"><Image src="/icons/search.png" alt="s" width={16} height={16} className="invert brightness-200" /></button>
        </div>
      </div>
      <div className="w-full text-center py-32">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute w-20 h-20"><Image src="/inquiry.png" alt="none" fill className="opacity-100" /></div>
        </div>
        <h3 className="text-lg font-bold text-[#333] mb-1">0 Inquiries</h3>
        <p className="text-sm text-gray-400">No inquiries found.</p>
      </div>
    </>
  );
}

// --- Customer 섹션 컴포넌트 ---
function CustomerSection({ dateRange, setDateRange }: any) {
  return (
    <>
      <div className="bg-[#F8F8F8] pr-6 rounded-xs flex items-center gap-2 mb-10">
        <span className="text-sm font-bold text-[#333] whitespace-nowrap">Date Range</span>
        
        <div className="bg-white w-111 rounded-full p-1 flex items-center shadow-sm">
          {['Today', '7 Days', '15 Days', '1 Month', '3 Months', '1 Year'].map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range)}
              className={`px-4 py-2 text-xs font-bold transition-all ${
                dateRange === range 
                  ? 'bg-[#299BFF] text-white rounded-full' 
                  : 'text-[#333] hover:text-[#299BFF]'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xs text-xs font-inter text-[#333]">20xx.xx.xx <Image src="/icons/calendar.png" alt="cal" width={18} height={18} className="opacity-100" /></div>
          <span className="text-gray-400">-</span>
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xs text-xs font-inter text-[#333]">20xx.xx.xx <Image src="/icons/calendar.png" alt="cal" width={18} height={18} className="opacity-100" /></div>
          <button className="bg-[#299BFF] p-2.5 rounded-full hover:bg-[#1E86E5] shadow-sm"><Image src="/icons/search.png" alt="s" width={16} height={16} className="invert brightness-200" /></button>
        </div>
      </div>
      <div className="w-full text-center py-32">
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="relative w-16 h-16 mx-auto mb-6">
            <div className="absolute w-20 h-20"><Image src="/inquiry.png" alt="none" fill className="opacity-100" /></div>
          </div>
        </div>
        <h3 className="text-lg font-bold text-[#333] mb-1">0 Inquiries</h3>
        <p className="text-sm text-gray-400">No inquiries found.</p>
      </div>
    </>
  );
}

// --- FAQ 섹션 컴포넌트 ---
function FaqSection({ categories, selectedCat, setCat, expandedId, setExpandedId }: any) {
  return (
    <div className="flex flex-col">
      {/* 서브 카테고리 필터 */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat: string) => (
          <button key={cat} onClick={() => setCat(cat)} className={`px-4 py-2 text-[11px] font-bold rounded-full border transition-all ${selectedCat === cat ? 'bg-[#299BFF] border-[#299BFF] text-white' : 'bg-white border-gray-100 text-[#828282] hover:border-[#299BFF]'}`}>{cat}</button>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#333]">Search Results <span className="text-[#299BFF] font-inter ml-2">21</span> results</h3>
      </div>

      {/* FAQ 리스트 */}
      <div className="flex flex-col gap-3">
        {FAQ_DATA.map((faq) => (
          <div key={faq.id} className="border border-gray-100 rounded-xs overflow-hidden">
            <button 
              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
              className={`w-full flex items-center gap-5 px-6 py-5 transition-colors ${expandedId === faq.id ? 'bg-[#299BFF] text-white' : 'bg-white text-[#333]'}`}
            >
              <span className={`flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-medium ${expandedId === faq.id ? 'bg-white text-[#299BFF]' : 'bg-[#299BFF] text-white'}`}>Q</span>
              <span className="flex-1 text-left text-sm font-medium">{faq.question}</span>
              <svg className={`w-4 h-4 transition-transform ${expandedId === faq.id ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3"/></svg>
            </button>
            {expandedId === faq.id && (
              <div className="bg-[#E8F4FF] px-6 py-8 flex gap-5">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D9EEFF] text-font text-[11px] font-bold shrink-0">A</span>
                <p className="text-sm text-font leading-relaxed font-medium">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}