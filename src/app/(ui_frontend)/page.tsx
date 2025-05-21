// app/page.tsx (Next.js 14+ app router)

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ScreenshotCard } from "@/components/ui/screenshot-card";
import InfiniteBannerAnime from "@/components/frontend/InfiniteBannerAnime";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col">

      {/* Hero */}
      <section className="text-center relative banner">
        <div className="slogan mb-8">
          <h1 className="text-2xl md:text-5xl font-bold">
            <span className="text-primary">248 </span> app <span className="text-primary">14995</span> screenshots
          </h1>
          <p className="text-secondary mt-6 block lg:px-24 px-4 lg:w-2/3 mx-auto">Thư viện screenshots lớn nhất cho UX/UI, nơi tổng hợp screenshots từ các sản phẩm thực tế, được sắp xếp khoa học để dễ dàng tìm kiếm và sử dụng.</p>
        </div>
        <InfiniteBannerAnime />
      </section>
      {/* Discover Section */}
      <section className="py-6 flex-1">
        <div className="lg:px-20 px-4">
          <h2 className="text-3xl font-bold mb-4">Discover</h2>
          {/* Tabs (Apps | Screens | Components | Flows) */}
          <div className="flex flex-wrap gap-4 mb-6 border-b-2 border-[--border]">
            <Button variant="ghost" className="text-white rounded-b-none bg-transparent">Apps</Button>
            <Button variant="ghost" className="text-white rounded-b-none bg-transparent border-b-2 border-white">Screens</Button>
            <Button variant="ghost" className="text-white rounded-b-none bg-transparent">Components</Button>
            <Button variant="ghost" className="text-white rounded-b-none bg-transparent">Flows</Button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Select>
              <SelectTrigger className="border border-[--border] rounded-3xl">
                <SelectValue placeholder="UI Components" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border border-[--border] rounded-3xl">
                <SelectValue placeholder="Domains" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border border-[--border] rounded-3xl">
                <SelectValue placeholder="Screens" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Grid Items */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
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
