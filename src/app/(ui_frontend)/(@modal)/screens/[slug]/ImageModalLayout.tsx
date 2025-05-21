'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Dialog } from '@/components/ui/dialog';
import ImageModalContent from './ImageModalPage';

type ImageItem = {
  id: number;
  img: string;
  title: string;
};

const images: ImageItem[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  img: '/uiflat_dummy.webp',
  title: `Input phone number – ${i + 1}`,
}));

export default function ImageModalLayout() {
  const router = useRouter();
  const params = useParams();
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const slug = params.slug as string;
    const id = parseInt(slug?.replace('slug-', ''), 10);
    const idx = images.findIndex((img) => img.id === id);
    if (idx !== -1) {
      setIndex(idx);
    }
  }, [params.slug]);

  const closeModal = () => {
    router.push('/apps', { scroll: false });
  };

  const goTo = (direction: 'next' | 'prev') => {
    if (index === null) return;
    const nextIndex = direction === 'next' ? index + 1 : index - 1;
    if (nextIndex >= 0 && nextIndex < images.length) {
      const nextSlug = `slug-${images[nextIndex].id}`;
      router.push(`/screens/${nextSlug}`, { scroll: false });
      setIndex(nextIndex); // Không re-render Dialog
    }
  };

  return (
    <Dialog open={true} onOpenChange={(open) => !open && closeModal()}>
      {index !== null && (
        <ImageModalContent
          image={images[index]}
          index={index}
          total={images.length}
          onNext={() => goTo('next')}
          onPrev={() => goTo('prev')}
          onClose={closeModal}
        />
      )}
    </Dialog>
  );
}
