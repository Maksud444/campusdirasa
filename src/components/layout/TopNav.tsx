'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import {
  Menu, X, Bell, Search, User, ChevronDown, Home
} from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';

export default function TopNav() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { open: sidebarOpen, toggle: toggleSidebar } = useSidebar();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {/* Toggle global sidebar */}
            <button
              onClick={() => toggleSidebar()}
              className="lg:block p-2 text-gray-700 hover:bg-emerald-50 rounded-lg"
              aria-label="toggle-sidebar"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg sm:text-2xl font-bold">كامبوس دراسة</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:block p-2 text-gray-700 hover:bg-emerald-50 rounded-lg">
              <Search size={18} />
            </button>
            <button className="hidden md:block relative p-2 text-gray-700 hover:bg-emerald-50 rounded-lg">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {session ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen((s) => !s)}
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-lg"
                >
                  <User size={16} />
                  <span className="hidden lg:inline">{session.user?.name || 'المستخدم'}</span>
                  <ChevronDown size={14} />
                </button>

                {userMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    <Link href="/profile" className="block px-4 py-2 text-right hover:bg-emerald-50">الملف الشخصي</Link>
                    <div className="border-t my-1" />
                    <button onClick={() => signOut()} className="w-full text-right px-4 py-2 text-red-600 hover:bg-red-50">تسجيل الخروج</button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg">
                <User size={16} />
                <span>تسجيل الدخول</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="flex items-center gap-3 text-gray-700 py-2 px-2 rounded hover:bg-emerald-50">
              <Home size={18} />
              <span>الرئيسية</span>
            </Link>
            {!session && (
              <Link href="/login" className="block bg-emerald-500 text-white text-center py-2 rounded">تسجيل الدخول</Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}