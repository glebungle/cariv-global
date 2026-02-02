'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function NotificationPage() {
  const [settings, setSettings] = useState({
    core: true,
    transactions: true,
    bidding: false,
    payments: false,
    settlement: false,
    marketing: false,
    promotions: false,
    updates: true,
    events: true,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex-1 px-12 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-black text-[#333]">Notification</h1>
      </header>

      <section className="border border-[#787878] rounded-xs p-12 shadow-sm bg-white">
        
        {/* 1. Core Notifications */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6">
                <Image src="/icons/bell.png" alt="bell" fill className="object-contain" />
              </div>
              <h2 className="text-xl font-black text-[#333]">Core Notifications</h2>
            </div>
            <Toggle isOn={settings.core} onToggle={() => toggle('core')} />
          </div>

          <div className="space-y-0">
            <NotificationRow label="Transactions" isOn={settings.transactions} onToggle={() => toggle('transactions')} />
            <NotificationRow label="Bidding" isOn={settings.bidding} onToggle={() => toggle('bidding')} />
            <NotificationRow label="Payments" isOn={settings.payments} onToggle={() => toggle('payments')} />
            <NotificationRow label="Settlement" isOn={settings.settlement} onToggle={() => toggle('settlement')} isLast />
          </div>
        </div>

        <div className="my-12 h-[1px] w-full bg-[#3D3D3D] opacity-10" />

        {/* 2. Marketing */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6">
                <Image src="/icons/bell.png" alt="marketing" fill className="object-contain" />
              </div>
              <h2 className="text-xl font-black text-[#333]">Marketing</h2>
            </div>
            <Toggle isOn={settings.marketing} onToggle={() => toggle('marketing')} />
          </div>

          <div className="space-y-0">
            <NotificationRow label="Promotions" isOn={settings.promotions} onToggle={() => toggle('promotions')} />
            <NotificationRow label="Updates" isOn={settings.updates} onToggle={() => toggle('updates')} />
            <NotificationRow label="Events" isOn={settings.events} onToggle={() => toggle('events')} isLast />
          </div>
        </div>
      </section>
    </div>
  );
}

function NotificationRow({ label, isOn, onToggle, isLast = false }: { label: string; isOn: boolean; onToggle: () => void; isLast?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-6 ${!isLast ? 'border-b border-gray-100' : ''}`}>
      <span className="text-[15px] font-bold text-[#333] ml-10">{label}</span>
      <Toggle isOn={isOn} onToggle={onToggle} />
    </div>
  );
}

function Toggle({ isOn, onToggle }: { isOn: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      type="button"
      className={`relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none ${
        isOn ? 'bg-[#299BFF]' : 'bg-[#E0E0E0]'
      }`}
    >
      <span
        className="inline-block h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ease-in-out"
        style={{
          transform: `translateX(${isOn ? '26px' : '2px'})`
        }}
      />
    </button>
  );
}