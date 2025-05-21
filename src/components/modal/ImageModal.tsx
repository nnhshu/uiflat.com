'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type ImageItem = {
  id: number;
  img: string;
};

type ImageModalProps = {
  images: ImageItem[];
  currentId: string | null;
};

export default function ImageModal({ images, currentId }: ImageModalProps) {
  const router = useRouter();
  const pathname = usePathname();

  const index = images.findIndex((img) => img.id === Number(currentId));
  const currentImage = images[index];

  const goTo = (idx: number) => {
    const next = images[idx];
    if (next) {
      router.push(`${pathname}?image=${next.id}`, { scroll: false });
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(index + 1);
      if (e.key === 'ArrowLeft') goTo(index - 1);
      if (e.key === 'Escape') router.push(pathname, { scroll: false });
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [index]);

  if (!currentImage) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center transition-opacity duration-300">
      {/* Close button */}
      <button
        onClick={() => router.push(pathname, { scroll: false })}
        className="absolute top-6 right-6 text-white hover:opacity-80"
      >
        <X size={28} />
      </button>

      {/* Previous button */}
      {index > 0 && (
        <button
          onClick={() => goTo(index - 1)}
          className="absolute left-6 text-white hover:opacity-80"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Image */}
      <img
        src={currentImage.img}
        alt={`Image ${currentImage.id}`}
        className="max-w-[90%] max-h-[90%] rounded-xl border border-gray-700 shadow-lg"
      />

      {/* Next button */}
      {index < images.length - 1 && (
        <button
          onClick={() => goTo(index + 1)}
          className="absolute right-6 text-white hover:opacity-80"
        >
          <ChevronRight size={32} />
        </button>
      )}
    </div>
  );
}
