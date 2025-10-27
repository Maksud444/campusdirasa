'use client';

import { useSession } from 'next-auth/react';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function ScholarshipsPage() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">المنح الدراسية</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example scholarship card */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <GraduationCap className="w-12 h-12 text-emerald-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">منحة دراسية</h2>
          <p className="text-gray-600 mb-4">تفاصيل المنحة الدراسية ستظهر هنا</p>
          <Link 
            href="#"
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            مزيد من التفاصيل →
          </Link>
        </div>
      </div>
    </div>
  );
}
