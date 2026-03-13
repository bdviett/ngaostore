"use client";

import React from "react";

interface VideoEmbedProps {
  url: string | null;
}

export default function VideoEmbed({ url }: VideoEmbedProps) {
  return (
    <iframe
      src={url ?? undefined}
      title="Video hướng dẫn"
      className="w-full h-full min-h-[400px]"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
}
