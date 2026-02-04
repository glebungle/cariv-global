'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function MembershipPage() {
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const [selectedType, setSelectedType] = useState<'business' | 'individual' | null>(null);
  const [purchaseVolume, setPurchaseVolume] = useState('');
  const [purchasePurpose, setPurchasePurpose] = useState('');

  const isStep1Valid = selectedType !== null;
  const isStep2Valid = purchaseVolume !== '' && purchasePurpose !== '';

  const handleNext = () => {
    if (currentSubStep === 1 && isStep1Valid) {
      setCurrentSubStep(2); 
    } else if (currentSubStep === 2 && isStep2Valid) {
      window.location.href = '/auth/verify-email'; 
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center pb-24 font-pretendard bg-[#F8F8F8]">
      
      {/* 1. 상단 스텝 인디케이터 */}
      <div className="mt-24 w-[800px] flex items-start justify-between px-10">
        {[
          { step: 1, label: 'Membership' },
          { step: 2, label: 'Verify Email' },
          { step: 3, label: 'Information' },
          { step: 4, label: 'Complete' },
        ].map((item, index) => (
          <React.Fragment key={item.step}>
            <div className="flex flex-col items-center shrink-0">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-base font-bold z-10 transition-colors ${
                item.step === 1 ? 'bg-primary text-white' : 'bg-[#D9D9D9] text-white'
              }`}>
                {item.step}
              </div>
              <span className={`mt-3 text-[13px] font-bold ${item.step === 1 ? 'text-primary' : 'text-[#828282]'}`}>
                {item.label}
              </span>
            </div>
            {index < 3 && <div className="h-[1px] bg-[#D9D9D9] flex-1 mt-5 mx-6 self-start" />}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h1 className="text-[40px] font-bold text-[#333] tracking-tight">Select Membership Type</h1>
      </div>
      <div>
        <p className="text-sm font-medium text-[#A5A5A5] text-center">Welcome to Cariv.<br/> Become a member to enjoy exclusive benefits, special rewards, and point accumulation.<br/>Please select your membership type below to continue with registration.</p>
      </div>

      <div className="mt-12 h-[1px] w-[800px] bg-[#C4C4C4]" />

      <div className="mt-16 w-[800px]">
        {currentSubStep === 1 ? (
          <div className="flex justify-center gap-10">
            <MembershipCard type="business" title="For dealers and businesses" desc="Manage listings, vehicles, and services with professional tools." img="/membership1.png" isSelected={selectedType === 'business'} onClick={() => setSelectedType('business')} />
            <MembershipCard type="individual" title="For individual users" desc="Explore vehicles, save favorites, and enjoy personalized services." img="/membership2.png" isSelected={selectedType === 'individual'} onClick={() => setSelectedType('individual')} />
          </div>
        ) : (
          <div className="flex flex-col gap-10 px-20">
            <div className="space-y-0">
              <label className="block text-sm font-bold text-font mb-3">Average Annual Purchase Volume</label>
              <SelectBox 
                value={purchaseVolume} 
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPurchaseVolume(e.target.value)}
                placeholder="Please select a quantity"
                options={['1', '2', '3', '4', '5', '6', '7']}
              />
            </div>
            <div className="h-[1px] w-full bg-[#C4C4C4]" />
            <div className="space-y-0">
              <label className="block text-sm font-bold text-font mb-3">Purchase Purpose</label>
              <SelectBox 
                value={purchasePurpose} 
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPurchasePurpose(e.target.value)}
                placeholder="Please select a purchase purpose"
                options={['Personal Use','Corporate Vehicle Use', 'Retail Resale', 'Wholesale Distribution', 'Rental & Leasing Business','Taxi & Transportation Services','Parts Purchase / Salvage']}
              />
            </div>
            <div className="h-[1px] w-full bg-[#C4C4C4]" />
          </div>
        )}
      </div>

      <div className="mt-16 flex w-[400px] flex-col gap-3">
        <button 
          onClick={handleNext}
          disabled={currentSubStep === 1 ? !isStep1Valid : !isStep2Valid}
          className={`w-full rounded-sm py-4 text-lg font-bold transition-all shadow-sm ${
            (currentSubStep === 1 ? isStep1Valid : isStep2Valid)
              ? 'bg-primary text-white hover:bg-primary-dark cursor-pointer' 
              : 'bg-[#EDEDED] text-[#828282] hover:bg-[#E5E5E5] border border-[#A5A5A5]'
          }`}
        >
          Next
        </button>
        <button className="w-full rounded-sm border border-[#A5A5A5] bg-[#EDEDED] py-4 text-lg font-bold text-[#828282] hover:bg-[#E5E5E5] transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}

// --- 멤버십 카드 ---
function MembershipCard({ type, title, desc, img, isSelected, onClick }: any) {
  return (
    <div onClick={onClick} className={`flex w-[380px] cursor-pointer flex-col items-center rounded-sm bg-white p-10 transition-all border-2 ${isSelected ? 'border-primary shadow-[0px_10px_30px_rgba(41,155,255,0.1)] scale-[1.02]' : 'border-transparent shadow-sm'}`}>
      <h3 className="text-[18px] font-bold text-[#333]">{title}</h3>
      <p className="mt-3 text-center text-xs text-[#828282] leading-relaxed">{desc}</p>
      <div className="my-10 relative h-44 w-full"><Image src={img} alt={type} fill className="object-contain" /></div>
      <div className={`w-full py-4 text-sm font-bold text-center rounded-sm transition-colors ${isSelected ? 'bg-primary text-white' : 'bg-[#F4F4F4] text-[#828282]'}`}>Sign Up as a {type === 'business' ? 'Business' : 'Individual'} Member</div>
    </div>
  );
}

// --- 드롭다운 컴포넌트  ---
interface SelectBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: string[];
}

function SelectBox({ value, onChange, placeholder, options }: SelectBoxProps) {
  const isSelected = value !== '';
  return (
    <div className="relative">
      <select 
        value={value}
        onChange={onChange}
        className={`w-full border rounded-sm px-4 py-3 text-sm outline-none appearance-none transition-all ${
          isSelected 
            ? 'border-[#A5A5A5] text-font font-medium bg-[#E8F4FF]' 
            : 'border-[#A5A5A5] text-font bg-[#F1F1F1]'
        }`}
      >
        <option value="" disabled className="bg-white">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-white text-black">
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-4 -translate-y-1/2 pointer-events-none w-4 h-4">
        <Image 
          src='/icons/down.png'
          alt='↓' 
          fill 
          className="object-contain" 
        />
      </div>
    </div>
  );
}