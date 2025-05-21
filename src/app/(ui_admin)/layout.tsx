import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <aside className="w-64 fixed top-0 left-0 h-full bg-gray-800 text-white p-4">Admin Sidebar</aside>
        <main className="ml-64 p-6 bg-gray-100 min-h-screen">{children}</main>
      </body>
    </html>
  );
}