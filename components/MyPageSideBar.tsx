'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function MyPageSideBar() {
  const pathname = usePathname();
  
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  const menuGroups = [
    {
      title: "My Profile",
      items: [
        { name: "Edit Profile", href: "/mypage/profile" },
        { name: "Edit Basic Information", href: "/mypage/edit-info" },
        { name: "Identity Verification Status", href: "/mypage/verify" },
        { name: "Set / Change Secondary PW", href: "/mypage/second-pw" },
      ],
    },
    { 
      title: "Account Settings", 
      items: [
        { name: "Change Login Password", href: "/mypage/change-pw" },
        { name: "Notification", href: "/mypage/notification" },
      ] 
    },
    { title: "Financial Information", items: [] },
    { title: "Saved Items", items: [] },
    { title: "Notifications", items: [] },
    { title: "Contact & Support", items: [
      { name: "1:1 Inquiry", href: "/mypage/inquiry" },
    ] },
    { title: "Terms & Consents", items: [] },
  ];

  useEffect(() => {
    const activeGroup = menuGroups.find(group => 
      group.items.some(item => pathname === item.href)
    );
    if (activeGroup) {
      setOpenTitle(activeGroup.title);
    }
  }, [pathname]);

  const handleToggle = (title: string) => {
    setOpenTitle(prev => (prev === title ? null : title));
  };

  return (
    <aside className="w-64 shrink-0 py-10">
      {/* 타이틀 영역 */}
      <div className="px-6 mb-8">
        <h2 className="text-2xl font-black text-[#333] mb-8">My page</h2>
      </div>
      <div className="h-[0.25px] w-full bg-[#3D3D3D]" />

      <nav className="flex flex-col">
        {menuGroups.map((group) => {
          const isOpen = openTitle === group.title;
          const hasActiveChild = group.items.some((item) => pathname === item.href);

          return (
            <div key={group.title} className="flex flex-col">
              <button 
                onClick={() => handleToggle(group.title)}
                className={`w-full flex justify-between items-center px-6 py-4 text-sm transition-all ${
                  hasActiveChild
                    ? 'font-black text-font' 
                    : 'font-medium text-font'
                }`}
              >
                {group.title}
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 15l-7-7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {/* 서브 메뉴 리스트*/}
              {isOpen && group.items.length > 0 && (
                <ul className="mb-2">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.name} className="relative">
                        {isActive && (
                          <div className="absolute left-0 top-0 w-[5px] h-full bg-[#299BFF] z-10" />
                        )}
                        <Link 
                          href={item.href}
                          className={`block pl-10 pr-6 py-3 text-[14px] transition-all relative ${
                            isActive 
                              ? 'text-[#299BFF] bg-gradient-to-r from-[#E8F3FF] to-transparent font-bold' 
                              : 'text-[#4F4F4F] hover:text-[#333] font-medium'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
              <div className="h-[0.25px] w-full bg-[#3D3D3D]" />
            </div>
          );
        })}
      </nav>
    </aside>
  );
}