"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CiSquareChevRight, CiSquareChevLeft } from "react-icons/ci";

import Image from "next/image";

type ImageItem = {
    id: number;
    img: string;
    title: string;
};

const images: ImageItem[] = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    img: "/uiflat_dummy.webp",
    title: `Input phone number – ${i + 1}`,
}));

export default function ImageModalPage() {
    const router = useRouter();
    const params = useParams();

    const slug = params.slug as string;
    const index = images.findIndex((img) => `slug-${img.id}` === slug);
    const currentImage = images[index];

    const goTo = (idx: number) => {
        const next = images[idx];
        if (next) {
            router.push(`/screens/slug-${next.id}`, { scroll: false });
        }
    };

    const closeModal = () => {
        const baseSlug = slug.split("-")[0];
        router.push(`/apps/${baseSlug}`, { scroll: false });
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") goTo(index + 1);
            if (e.key === "ArrowLeft") goTo(index - 1);
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [index]);

    if (!currentImage) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = currentImage.img;
        link.download = `image-${currentImage.id}.png`;
        link.click();
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center py-10">
            <div className="flex gap-2 w-7xl max-w-7xl">
                <div className="relative w-full flex-1 mx-auto px-4 py-6 border rounded-4xl border-[#2F323C] bg-[#1A1C21]">
                    {/* Close Button */}
                    <div className="flex justify-between items-center">
                        <p className="text-white text-sm opacity-80">{currentImage.title}</p>
                        <button
                            onClick={closeModal}
                            className="text-white hover:text-gray-300 transition bg-[#2B2E37] w-10 h-10 flex items-center justify-center border border-[#2B2E37] rounded-4xl cursor-pointer"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Prev Button */}
                    {index > 0 && (
                        <button
                            onClick={() => goTo(index - 1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition"
                        >
                            <ChevronLeft size={32} />
                        </button>
                    )}

                    {/* Image + Info */}
                    <div className="flex flex-col items-center gap-4">
                        <Image
                            src={currentImage.img}
                            alt={`Image ${currentImage.id}`}
                            width="1024"
                            height="512"
                            className="size-full rounded-4xl select-none object-cover object-top aspect-[9/16] w-1/3"
                        />

                        {/* Action buttons */}
                        <div className="mt-4 flex gap-4 w-full items-center justify-between">
                            <div className="flex text-white items-center gap-2 flex-1">
                                <CiSquareChevLeft size={24} />
                                <CiSquareChevRight size={24} />
                                <p className="mb-0 text-sm">Use arrow keys for navigation</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 flex-1">
                                <button
                                    onClick={handleCopy}
                                    className="bg-[var(--color-background)] border border-[var(--color-border)] text-white px-8 py-2 rounded-full text-sm hover:bg-white/20 transition"
                                >
                                    Copy
                                </button>
                                <button
                                    onClick={handleDownload}
                                    className="bg-white text-black px-8 py-2 rounded-full text-sm hover:bg-gray-200 transition"
                                >
                                    Download
                                </button>
                            </div>
                            <div className="flex-1 text-right">
                                <button
                                    onClick={() => alert("More info...")}
                                    className="text-sm underline text-white hover:text-white"
                                >
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Next Button */}
                    {index < images.length - 1 && (
                        <button
                            onClick={() => goTo(index + 1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition"
                        >
                            <ChevronRight size={32} />
                        </button>
                    )}
                </div>
                <div className="relative w-72 max-w-5xl mx-auto px-4 py-6 border rounded-4xl border-[#2F323C] bg-[#1A1C21]">
                    <div>
                        <h2 className="text-base mb-2 text-white">Info</h2>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li className="flex items-center justify-between text-white"><span className="text-[#9FA1A5]">ID:</span> {currentImage.id}</li>
                            <li className="flex items-center justify-between text-white"><span className="text-[#9FA1A5]">Title:</span> {currentImage.title}</li>
                            <li className="flex items-center justify-between text-white"><span className="text-[#9FA1A5]">Status:</span> Ready</li>
                            <li className="flex items-center justify-between text-white"><span className="text-[#9FA1A5]">Last updated:</span> May 22, 2025</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
