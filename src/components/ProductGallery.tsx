"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { ProductMediaItem } from "@/data/mock";
import { getVideoEmbedUrl } from "@/lib/video-embed";

interface ProductGalleryProps {
  media: ProductMediaItem[];
  productName: string;
}

export default function ProductGallery({ media, productName }: ProductGalleryProps) {
  const sortedMedia = [...media].sort((a, b) => (a.type === "video" && b.type !== "video" ? -1 : a.type !== "video" && b.type === "video" ? 1 : 0));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);

  const selected = sortedMedia[selectedIndex];
  const isVideo = selected?.type === "video";
  const embedUrl = isVideo && selected ? getVideoEmbedUrl(selected.url, true) : null;

  return (
    <div className="space-y-4">
      {/* Ảnh/video chính */}
      <div className="aspect-square relative rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-lg shadow-gray-200/50">
        {selected?.type === "image" ? (
          <Image
            src={selected.url}
            alt={productName}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={selectedIndex === 0}
          />
        ) : selected?.type === "video" && playingVideoIndex === selectedIndex ? (
          <iframe
            src={embedUrl || ""}
            title={`Video ${productName}`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlayingVideoIndex(selectedIndex)}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-900 group"
          >
            {selected?.thumbnail ? (
              <Image
                src={selected.thumbnail}
                alt=""
                fill
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {sortedMedia.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {sortedMedia.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setSelectedIndex(i);
                setPlayingVideoIndex(null);
              }}
              className={`relative shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                selectedIndex === i ? "border-primary ring-2 ring-primary/20" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {item.type === "image" ? (
                <Image
                  src={item.url}
                  alt={`${productName} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" fill="currentColor" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
