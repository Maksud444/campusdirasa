'use client';

import React from 'react';
import Link from 'next/link';
import { Home, FileText, Hospital, BookOpen, Globe } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';

export default function Sidebar() {
  const { open: sidebarOpen, toggle } = useSidebar();

  const pdfCategories = [
    { id: 1, title: 'قوائم PDF', href: '/pdf/iqama', icon: FileText },
    { id: 2, title: 'المستشفيات', href: '/hospitals', icon: Hospital },
    { id: 3, title: 'السفارات', href: '/embassies', icon: Globe },
    { id: 4, title: 'المكتبة', href: '/library/dirasa-khassa', icon: BookOpen },
  ];

  return (
    <aside className={`fixed right-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg border-l border-gray-200 transition-all duration-300 overflow-y-auto z-40 ${sidebarOpen ? 'w-72' : 'w-0 lg:w-20'}`}>
      <div className={`p-4 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
        <button onClick={() => toggle()} className="mb-3 px-2 py-1 bg-emerald-50 text-emerald-600 rounded">قفل/توسيع</button>

        <Link href="/" className="flex items-center gap-3 px-4 py-3 bg-emerald-50 text-emerald-600 rounded-lg mb-3">
          <Home size={18} />
          {sidebarOpen && <span>الرئيسية</span>}
        </Link>

        <div className="space-y-1">
          {pdfCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link key={cat.id} href={cat.href} className="flex items-center gap-3 px-4 py-2 rounded hover:bg-emerald-50 text-gray-700">
                <Icon size={18} />
                {sidebarOpen && <span>{cat.title}</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}