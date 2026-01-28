// src/components/Footer.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F0F7FF] pt-16 pb-8 text-[#333]">
      <div className="mx-auto max-w-[1440px] px-10">
        <div className="flex flex-wrap justify-between gap-10">
          
          {/* 기업 정보 및 고객센터 */}
          <div className="flex flex-col gap-6">
            <div className="relative h-10 w-32">
              <Image src="/logo.png" alt="CARIV" fill className="object-contain object-left" />
            </div>
            <p className="text-lg font-bold">Vehicle trading, worldwide</p>
            
            <div className="mt-4 space-y-2">
              <div className="flex gap-4">
                <span className="text-gray-500">Customer Support</span>
                <span className="font-bold">02-1111-1111</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500">Weekdays</span>
                <span className="font-bold">AM 9:00 ~ PM 18:00</span>
              </div>
            </div>
          </div>

          {/* 내비게이션 링크 그룹 */}
          <div className="flex gap-16">
            <FooterColumn 
              title="Company" 
              links={["About Cariv", "How It Works", "Business Info", "Contact Us"]} 
            />
            <FooterColumn 
              title="Platform" 
              links={["Vehicles", "Auctions", "Orders", "Shipping", "Documents"]} 
            />
            <FooterColumn 
              title="Support" 
              links={["Help Center", "FAQs (FAQ)", "1:1 Inquiry", "Order Tracking"]} 
            />
            <FooterColumn 
              title="Legal" 
              links={[
                "Terms of Service", "Privacy Policy", "Marketing Consent Policy", 
                "Advertising Consent Policy", "Cookie Policy", "Disclaimer"
              ]} 
            />
          </div>

          {/* 사업자 정보 및 SNS */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="mb-4 text-lg font-bold">Business Info</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                111-1111<br />
                Republic of Korea<br />
                Gangnam-gu, Seoul, 06133, 456
              </p>
            </div>
            
            <div className="flex gap-3">
              <SocialIcon src="/icons/x.png" />
              <SocialIcon src="/icons/instagram.png" />
              <SocialIcon src="/icons/facebook.png" />
              <SocialIcon src="/icons/youtube.png" />
            </div>
          </div>
        </div>

        {/* 하단 저작권 영역 */}
        <div className="mt-16 border-t border-gray-300 pt-8 text-center text-sm text-gray-500">
          © 2026 CARIV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-bold">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        {links.map((link) => (
          <li key={link} className="cursor-pointer hover:text-primary transition-colors">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ src }: { src: string }) {
  return (
    <div className="relative h-10 w-10 cursor-pointer transition-opacity hover:opacity-80">
      <Image 
        src={src} 
        alt="social icon" 
        fill 
        className="object-contain" 
      />
    </div>
  );
}