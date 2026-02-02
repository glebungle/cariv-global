'use client';

import React, { useState } from 'react';

export default function ChangePasswordPage() {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex-1 px-12 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-black text-[#333]">Change Login Password</h1>
      </header>

      <section className="bg-white border border-[#787878] rounded-xs p-12 shadow-sm">
        <div className="flex flex-col">
          
          <PasswordInputRow 
            label="Current Password" 
            placeholder=""
            value={passwords.current}
            onChange={(val) => setPasswords({...passwords, current: val})}
          />
          
          <PasswordInputRow 
            label="New Password" 
            placeholder=""
            value={passwords.new}
            onChange={(val) => setPasswords({...passwords, new: val})}
            // 경고 문구 추가?
          />
          
          <PasswordInputRow 
            label="Confirm Password" 
            placeholder=""
            value={passwords.confirm}
            onChange={(val) => setPasswords({...passwords, confirm: val})}
            error={passwords.new !== passwords.confirm && passwords.confirm !== '' ? "Passwords do not match." : null}
          />

          <div className="mt-12 flex justify-end">
            <button className="bg-primary text-white px-12 py-2.5 rounded-xs text-[15px] font-bold shadow-sm hover:bg-primary-dark transition-all">
              Save
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

interface PasswordInputRowProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  error?: string | null;
}

function PasswordInputRow({ label, placeholder, value, onChange, error }: PasswordInputRowProps) {
  return (
    <div className="flex py-8 border-b border-[#C4C4C4] items-center last:border-none">
      <span className="w-40 text-[13px] font-bold text-[#333] shrink-0">
        {label}<span className="text-red-500 ml-1">*</span>
      </span>
      <div className="flex-1 max-w-xl group relative">
        <input 
          type="password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`h-10 w-116 border bg-[#F8F7F7] rounded-sm px-4 py-3 text-xs outline-none transition-all font-medium 
            ${error 
              ? 'border-red-500 bg-red-50/10' 
              : 'border-[#BDBDBD]/40 bg-[#F1F1F1] focus:border-primary focus:bg-white focus:shadow-sm'
            }`}
        />
        {error && (
          <p className="absolute -bottom-6 left-0 text-[11px] text-red-500 font-bold">{error}</p>
        )}
      </div>
    </div>
  );
}