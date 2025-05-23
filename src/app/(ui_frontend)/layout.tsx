import { ReactNode } from "react";
import "../globals.css";
import Head from 'next/head'

import Header from "@/components/frontend/Header";
import { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Uiflat - Thư viện screen UI chất lượng cao",
  description: "Uiflat.com – Thư viện screen UI chất lượng cao cho thiết kế Web & App. Tổng hợp hàng trăm giao diện hiện đại, dễ tùy chỉnh, phù hợp mọi dự án UI/UX.",
};
export default function FrontendLayout({ children, modal }: { children: ReactNode, modal: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <body>
        <AuthProvider>
          <Header />
          {children}
          {modal}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}