"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import Slideshow from "./Slideshow";
import { blogPosts } from "@/data/mock";

interface BlogProps {
  showViewAll?: boolean;
  useSlideshow?: boolean;
}

export default function Blog({ showViewAll = false, useSlideshow = true }: BlogProps) {
  return (
    <section id="blogs" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Video & Hướng dẫn
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
            Danh Sách Blog & Video Hướng Dẫn Sim Ghép iPhone Lock | Ngáo Store
          </h1>
          <p className="text-gray-500 text-lg mb-4">
            Hướng dẫn mở khóa iPhone Lock, cách ghép sim, fix các lỗi vặt khi sử dụng và mẹo dùng sim ghép từ Ngáo Store.
          </p>
          {showViewAll && (
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              Xem tất cả bài viết
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>

        {useSlideshow ? (
          <Slideshow
            items={blogPosts}
            renderItem={(post) => <BlogCard post={post} />}
            keyExtractor={(p) => p.id}
            variant="light"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
