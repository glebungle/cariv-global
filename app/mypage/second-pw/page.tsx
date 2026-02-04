'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function SecondaryPasswordPage() {
  const [isVerified, setIsVerified] = useState(false); // Step 1: 인증 여부
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [currentPw, setCurrentPw] = useState('');
  const [secondaryPw, setSecondaryPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  // 비밀번호 일치 여부 확인
  const isMatch = secondaryPw !== '' && secondaryPw === confirmPw;
  const isMismatch = confirmPw !== '' && secondaryPw !== confirmPw;

  const handleVerify = () => setIsVerified(true);
  const handleSave = () => {
    if (isMatch) setIsModalOpen(true);
  };

  return (
    <div className="flex-1 px-12 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-black text-font">Set / Change Secondary PW</h1>
      </header>

      {/* 메인 박스 */}
      <section className="relative min-h-[500px] bg-white border border-[#787878] rounded-xs p-12 shadow-sm flex flex-col justify-center">
        
        {!isVerified ? (
          /* --- Step 1: 인증 필요 상태 --- */
          <div className="flex flex-col items-center py-10">
            <div className="relative w-24 h-24 mb-8">
              <Image src="/verify.png" alt="verify" fill className="object-contain" />
            </div>
            <p className="text-center text-[#333] text-[15px] font-medium leading-relaxed mb-8">
              Please enter your current password<br />
              to set or change your secondary password.
            </p>
            <div className="w-[400px] space-y-6">
              <input 
                type="password"
                value={currentPw}
                onChange={(e) => setCurrentPw(e.target.value)}
                className="w-full border border-gray-300 rounded-xs px-4 py-3 text-xs outline-none focus:border-primary"
              />
              <button 
                onClick={handleVerify}
                className="w-full bg-primary text-white py-3.5 rounded-xs font-bold text-sm hover:bg-primary-dark transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        ) : (
          /* --- Step 2: 비밀번호 입력 상태  --- */
          <div className="flex flex-col w-full">
            <PasswordInputRow 
              label="Secondary PW" 
              value={secondaryPw}
              onChange={(val) => setSecondaryPw(val)}
            />
            
            <div className="relative">
              <PasswordInputRow 
                label="Confirm PW" 
                value={confirmPw}
                onChange={(val) => setConfirmPw(val)}
              />
              
              {/* 검증 메시지 영역 */}
              <div className="absolute left-56 mt-2 ml-1">
                {isMatch && (
                  <div className="flex items-center gap-2 text-[#39ED4B] text-sm font-medium">
                    <div className="w-4 h-4 bg-[#39ED4B] rounded-full flex items-center justify-center">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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

            <div className="mt-24 flex justify-end">
              <button 
                onClick={handleSave}
                disabled={!isMatch}
                className={`px-12 py-2.5 rounded-sm text-sm font-bold shadow-sm transition-all ${
                  isMatch ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-300 text-white cursor-not-allowed'
                }`}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </section>

      {/* --- 성공 모달  */}
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
                  className="w-full bg-primary text-white py-2.5 rounded-xs font-bold text-sm hover:bg-primary-dark"
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

function PasswordInputRow({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex py-10 border-b border-[#C4C4C4] items-center last:border-none">
      <span className="w-56 text-[13px] font-bold text-[#333] shrink-0">
        {label}<span className="text-red-500 ml-1">*</span>
      </span>
      <div className="flex-1 max-w-xl">
        <input 
          type="password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-[#BDBDBD]/40 bg-[#F8F7F7] rounded-sm px-4 py-3 text-xs outline-none focus:border-primary focus:bg-white transition-all font-medium"
        />
      </div>
    </div>
  );
}