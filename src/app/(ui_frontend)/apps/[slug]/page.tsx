'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";
import ImageModal from '@/components/modal/ImageModal';


const TABS = ['Screens', 'UI components', 'Flows'];
const VERSIONS = ['04/2025', '03/2025', '02/2025'];


export default function AppSlugPage() {
//   const { slug } = useParams();
const searchParams = useSearchParams();
  const imageId = searchParams.get('image');
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('Screens');
  const [version, setVersion] = useState(VERSIONS[0]);

  const cards = Array.from({ length: 17 }).map((_, i) => ({
    id: i+1,
    img: '/uiflat_dummy.webp',
  }));

  return (
    <main className="min-h-screen bg-[#0f0f10] text-white px-20 py-8">
      {/* Back + Header */}
      <div className="mb-6">
        <button onClick={() => router.back()} className="text-gray-400 hover:underline mb-6">
          ← Back
        </button>
        <div className="flex gap-4 items-center">
            <div className="overflow-hidden">
                <Image
                    src="/avatar.png"
                    alt="App logo"
                    width={64}
                    height={64}
                    className="rounded-md hover:scale-105 transition"
                />
            </div>
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">Telegram</h1>
                <p className="text-sm text-gray-400">
                523 screens shot | Communication | Last update: 04/2025
                </p>
            </div>
        </div>
        
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-700 mb-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-sm ${
              tab === activeTab
                ? 'text-white border-b-2 border-white font-semibold'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          className="bg-[#1c1c1e] text-white px-4 py-2 rounded-md border border-gray-700"
        >
          {VERSIONS.map((v) => (
            <option key={v}>{`Version: ${v}`}</option>
          ))}
        </select>
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="bg-[#1c1c1e] text-white px-4 py-2 rounded-md border border-gray-700"
        >
          {TABS.map((tab) => (
            <option key={tab}>{tab}</option>
          ))}
        </select>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#1c1c1e] rounded-xl overflow-hidden border border-gray-800"
            // onClick={() => router.push(`?image=${card.id}`, { scroll: false })}
            onClick={() => router.push(`/screens/slug-${card.id}`, { scroll: false })}
          >
            <img src={card.img} alt="UI Screen" className="w-full h-auto" />
          </div>
        ))}
      </div>
      {imageId && <ImageModal images={cards} currentId={imageId} />}
    </main>
  );
}
