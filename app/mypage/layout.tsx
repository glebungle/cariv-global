// src/app/mypage/layout.tsx
import MyPageSideBar from '@/components/MyPageSideBar';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-7xl mx-auto py-10">
      {/* 고정 카테고리 */}
      <aside className="w-64 shrink-0">
        <MyPageSideBar />
      </aside>

      {/* 컨텐츠 영역 */}
      <main className="flex-1 ml-10">
        {children}
      </main>
    </div>
  );
}