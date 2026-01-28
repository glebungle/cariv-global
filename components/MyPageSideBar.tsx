'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function MyPageSideBar() {
  const pathname = usePathname();

  const menuGroups = [
    {
      title: "My Profile",
      items: [
        { name: "Edit Profile", href: "/mypage/profile" },
        { name: "Edit Basic Information", href: "/mypage/edit-info" },
        { name: "Identity Verification Status", href: "/mypage/verify" },
        { name: "Set / Change Secondary PW", href: "/mypage/password" },
      ],
    },
    { title: "Account Settings", items: [] },
    { title: "Financial Information", items: [] },
    { title: "Saved Items", items: [] },
    { title: "Notifications", items: [] },
    { title: "Contact & Support", items: [] },
    { title: "Terms & Consents", items: [] },
  ];

  return (
    <aside className="w-64 shrink-0 py-10 ">
      <div className="px-6 mb-8">
        <h2 className="text-2xl font-bold text-[#333] mb-8">My page</h2>
        <div className="h-[1px] w-full bg-[#E0E0E0]" />
      </div>

      <nav className="flex flex-col gap-2">
        {menuGroups.map((group) => (
          <div key={group.title}>
            <button className="w-full flex justify-between items-center px-6 py-3 text-sm font-bold text-[#333]">
              {group.title}
              <svg className={`w-4 h-4 transition-transform ${group.items.length > 0 ? 'rotate-0' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 15l-7-7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {group.items.length > 0 && (
              <ul className="mt-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name} className="relative">
                      {isActive && (
                        <div className="absolute left-0 top-0 w-[5px] h-full bg-primary z-10 rounded-md" />
                      )}
                      <Link 
                        href={item.href}
                        className={`block pl-10 pr-6 py-3 text-[14px] transition-all relative ${
                          isActive 
                            ? 'text-primary bg-gradient-to-r from-[#E8F3FF] to-transparent font-bold' 
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
          </div>
        ))}
      </nav>
    </aside>
  );
}