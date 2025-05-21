'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { DialogContent } from '@/components/ui/dialog';

type ImageItem = {
  id: number;
  img: string;
  title: string;
};

interface ImageModalContentProps {
  image: ImageItem;
  index: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}

export default function ImageModalContent({
  image,
  index,
  total,
  onNext,
  onPrev,
  onClose,
}: ImageModalContentProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image.img;
    link.download = `image-${image.id}.png`;
    link.click();
  };

  return (
    <DialogContent className="bg-black/90 max-w-full max-h-full p-0 border-none">
      <button onClick={onClose} className="absolute top-6 right-6 text-white hover:opacity-80">
        <X size={28} />
      </button>

      {index > 0 && (
        <button
          onClick={onPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:opacity-80"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      <div className="flex flex-col items-center justify-center w-full">
        <img
          src={image.img}
          alt={image.title}
          className="max-w-[90vw] max-h-[80vh] mx-auto rounded-xl border border-gray-700 shadow-lg"
        />
        <p className="text-white text-sm mt-2">{image.title}</p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={handleCopy}
            className="bg-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-700 text-sm text-white"
          >
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 text-sm"
          >
            Download
          </button>
          <button
            onClick={() => alert('More info...')}
            className="text-sm underline text-neutral-400 hover:text-white"
          >
            More info
          </button>
        </div>
      </div>

      {index < total - 1 && (
        <button
          onClick={onNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:opacity-80"
        >
          <ChevronRight size={32} />
        </button>
      )}
    </DialogContent>
  );
}
