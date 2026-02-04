'use client';

import React, { useState } from 'react';

export default function ChangePasswordPage() {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false); 

  // 비밀번호 일치 여부 
  const isMatch = passwords.confirm !== '' && passwords.new === passwords.confirm;
  const isMismatch = passwords.confirm !== '' && passwords.new !== passwords.confirm;

  const handleSave = () => {
    if (isMatch) {
      setIsModalOpen(true); 
    }
  };

  return (
    <div className="flex-1 px-12 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-black text-[#333]">Change Login Password</h1>
      </header>

      {/* 메인 섹션*/}
      <section className="bg-white border border-[#787878] rounded-xs p-12 shadow-sm">
        <div className="flex flex-col">
          
          <PasswordInputRow 
            label="Current Password" 
            value={passwords.current}
            onChange={(val) => setPasswords({...passwords, current: val})}
          />
          
          <PasswordInputRow 
            label="New Password" 
            value={passwords.new}
            onChange={(val) => setPasswords({...passwords, new: val})}
          />
          
          <div className="relative">
            <PasswordInputRow 
              label="Confirm Password" 
              value={passwords.confirm}
              onChange={(val) => setPasswords({...passwords, confirm: val})}
            />

            {/* 검증 메시지 영역 */}
            <div className="absolute left-40 mt-2 ml-1">
              {isMatch && (
                <div className="flex items-center gap-2 text-[#39ED4B] text-sm font-medium">
                  <div className="w-4 h-4 bg-[#39ED4B] rounded-full flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Passwords match
                </div>
              )}
              {isMismatch && (
                <div className="flex items-center gap-2 text-[#FF0000] text-sm font-medium">
                  <div className="w-4 h-4 bg-[#FF0000] rounded-full flex items-center justify-center text-white text-[10px]">!</div>
                  Passwords do not match
                </div>
              )}
            </div>
          </div>

          {/* 저장 버튼*/}
          <div className="mt-16 flex justify-end">
            <button 
              onClick={handleSave}
              disabled={!isMatch}
              className={`px-12 py-2.5 rounded-xs text-[15px] font-bold shadow-sm transition-all ${
                isMatch ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-300 text-white cursor-not-allowed'
              }`}
            >
              Save
            </button>
          </div>
        </div>
      </section>

      {/* --- 성공 모달 --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-sm shadow-xl w-[320px] overflow-hidden">
             <div className="flex justify-end p-2">
               <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">✕</button>
             </div>
             <div className="px-6 pb-8 pt-2 text-center">
                <p className="text-sm font-bold text-font mb-8">Saved successfully.</p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-primary text-white py-2.5 rounded-sm font-bold text-sm hover:bg-primary-dark"
                >
                  OK
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PasswordInputRow({ label, value, onChange }: { label: string; value: string; onChange: (val: string) => void }) {
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
          className="h-10 w-[464px] border border-[#BDBDBD]/40 bg-[#F8F7F7] rounded-sm px-4 py-3 text-xs outline-none transition-all font-medium focus:border-primary focus:bg-white focus:shadow-sm"
        />
      </div>
    </div>
  );
}