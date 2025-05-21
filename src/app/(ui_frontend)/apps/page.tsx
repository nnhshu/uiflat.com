// app/page.tsx (Next.js 14+ app router)

import { Button } from "@/components/ui/button";
import { ScreenshotCard } from "@/components/ui/screenshot-card";

export default function Apps() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Discover Section */}
      <section className="py-6">
        <div className="px-20">
          <h2 className="text-3xl font-bold mb-4">Discover</h2>
          {/* Tabs (Apps | Screens | Components | Flows) */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="ghost" className="text-white">Apps</Button>
            <Button variant="ghost" className="text-white border-b-2 border-white">Screens</Button>
            <Button variant="ghost" className="text-white">Components</Button>
            <Button variant="ghost" className="text-white">Flows</Button>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-8">
            <Button variant="outline" className="bg-gray-800 border-gray-600 text-white">Domains</Button>
            <Button variant="outline" className="bg-gray-800 border-gray-600 text-white">Function</Button>
          </div>

          {/* Grid Items */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[...Array(12)].map((_, i) => (
              <ScreenshotCard key={i}
              appLogo="/avatar.png"
              title="Zalopay"
              description="Thanh toán mọi dịch vụ bạn yêu thích"
              screenshotCount={1244}
              screenshots={[
                "/uiflat_dummy.webp",
                "/uiflat_dummy.webp",
                "/uiflat_dummy.webp",
                "/uiflat_dummy.webp",
                "/uiflat_dummy.webp",
                "/uiflat_dummy.webp",
                "/uiflat_dummy.webp"
              ]}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Đăng nhập hoặc đăng ký để xem tất cả màn hình</p>
            <Button>Try for free</Button>
          </div>

        </div>
      </section>

    </div>
  );
}
