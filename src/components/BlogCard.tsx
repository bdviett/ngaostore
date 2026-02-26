import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/mock";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-[32px] border border-gray-100 bg-white overflow-hidden hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
      <Link href={post.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
        <div className="aspect-video relative overflow-hidden bg-gray-100">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-secondary-dark/0 group-hover:bg-secondary-dark/40 transition-colors duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-secondary mb-4 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <span className="inline-flex w-full justify-center py-3 rounded-2xl font-bold text-sm bg-white/5 border border-gray-200 text-secondary hover:bg-white/10 hover:border-primary/30 transition-all">
            Xem video
          </span>
        </div>
      </Link>
    </article>
  );
}
