import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ScreenshotCardProps {
  appLogo: string;
  title: string;
  description: string;
  screenshotCount: number;
  screenshots: string[];
}

export const ScreenshotCard = ({
  appLogo,
  title,
  description,
  screenshotCount,
  screenshots,
}: ScreenshotCardProps) => {
  return (
    <div className="rounded-xl w-full max-w-4xl space-y-4">
      {/* Header */}
      <div className="flex justify-between items-start lg:flex-row flex-col">
        <div className="flex lg:flex-row flex-col lg:items-center gap-3 lg:mb-0 mb-4">
          <div className="overflow-hidden">
            <Image
              src={appLogo}
              alt="App logo"
              width={64}
              height={64}
              className="rounded-md hover:scale-105 transition"
            />
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold">{title}</h3>
            <p className="text-gray-400 text-xs">{description}</p>
          </div>
        </div>
        <div className="flex lg:items-center gap-3 lg:flex-row flex-col">
          <Badge className="bg-gray-800 text-white">v5.2 - 2024.10</Badge>
          <Badge className="bg-gray-800 text-white">{screenshotCount} screenshots</Badge>
        </div>
      </div>

      {/* Screenshots */}
      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent py-2">
        {screenshots.map((src, idx) => (
          <div
            key={idx}
            className="min-w-[180px] rounded-xl aspect-[9/16] flex items-center justify-center shrink-0"
          >
            <Image
              src={src}
              alt={`screenshot ${idx + 1}`}
              width={180}
              height={320}
              className="rounded-3xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
