'use client';

import { useState } from 'react';
import { Menu, BookOpen, Bell, Search, User, LogOut, ChevronDown } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export function Navigation({ onMenuClick }: { onMenuClick: () => void }) {
  const { data: session } = useSession();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-reverse space-x-3">
            <button 
              onClick={onMenuClick}
              className="p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <Link href="/" className="flex items-center space-x-reverse space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold  bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                كامبوس دراسة
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-reverse space-x-3">
            <button className="p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
              <Search size={20} />
            </button>
            
            <button className="relative p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-reverse space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
                >
                  <User size={18} />
                  <span>{session.user?.name}</span>
                  <ChevronDown size={14} />
                </button>
                
                {userMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    <button className="w-full text-right px-4 py-2 hover:bg-emerald-50 flex items-center space-x-reverse space-x-2 text-gray-700">
                      <User size={16} />
                      <span>الملف الشخصي</span>
                    </button>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button 
                      onClick={() => signOut()}
                      className="w-full text-right px-4 py-2 hover:bg-red-50 flex items-center space-x-reverse space-x-2 text-red-600"
                    >
                      <LogOut size={16} />
                      <span>تسجيل الخروج</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                تسجيل الدخول
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
