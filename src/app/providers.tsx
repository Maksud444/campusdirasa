'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { SidebarProvider } from '@/context/SidebarContext';

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: any;
}) {
  return (
    <SessionProvider session={session}>
      <SidebarProvider>{children}</SidebarProvider>
    </SessionProvider>
  );
}