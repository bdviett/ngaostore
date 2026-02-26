"use client";

import React from "react";
import BlogCard from "./BlogCard";
import Slideshow from "./Slideshow";
import { blogPosts } from "@/data/mock";

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Video & Hướng dẫn
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
            Blog & Video nổi bật
          </h3>
          <p className="text-gray-500 text-lg">
            Hướng dẫn kích hoạt, fix lỗi và mẹo sử dụng sim ghép từ Ngáo Store.
          </p>
        </div>

        <Slideshow
          items={blogPosts}
          renderItem={(post) => <BlogCard post={post} />}
          keyExtractor={(p) => p.id}
          variant="light"
        />
      </div>
    </section>
  );
}
