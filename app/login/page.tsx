'use client';

import React, { useState } from 'react';
import Modal from '@/components/Modal';

export default function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center">
      <main className="w-full max-w-[709px] px-6 py-12">
        <h1 className="text-center text-[40px] font-bold tracking-tight text-[#333]">Log In</h1>
        <p className="mt-2 text-center text-sm text-[#A5A5A5]">
          Log in to enjoy full access to all features, services, and permissions on Cariv.
        </p>

        <div className="mt-10 h-[1px] w-full bg-[#C4C4C4]" />

        <form onSubmit={handleLogin} className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#333]">E-mail</label>
            <input
              type="email"
              placeholder="Please enter your email address."
              className="font-inter w-full rounded-xs border border-[#A5A5A5] bg-[#F1F1F1] px-4 py-3.5 text-sm text-[#3D3D3D] transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#333]">Password</label>
            <input
              type="password"
              placeholder="Please enter your password."
              className="font-inter w-full rounded-xs border border-[#A5A5A5] bg-[#F1F1F1] px-4 py-3.5 text-sm text-[#3D3D3D] transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-primary" />
              Remember ID
            </label>
            <div className="text-sm text-[#5A5A5A]">
              <span className="cursor-pointer hover:text-primary transition-colors">Find ID</span>
              <span className="mx-2 text-[#5A5A5A]">|</span>
              <span className="cursor-pointer hover:text-primary transition-colors">Reset Password</span>
            </div>
          </div>
          <div className="mt-16 flex w-full max-w-[400px] flex-col gap-3 self-center">
            <button className="w-full rounded-[2px] bg-primary py-4 text-lg font-bold text-white hover:bg-primary-dark transition-colors">
              Log In
            </button>
            <button 
              type="button"
              className="w-full rounded-[2px] border border-[#E0E0E0] bg-[#EDEDED] py-4 text-lg font-bold text-[#828282] hover:bg-[#E5E5E5] transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        message="No registered email found." 
      />
    </div>
  );
}