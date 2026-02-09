"use client";

import React, { useState, useEffect } from "react";
import { Star, ExternalLink, Quote, Tag, Smartphone, ChevronDown, ChevronUp, Plus } from "lucide-react";
import reviewsData from "@/data/reviews.json";

const MAX_COMMENT_LENGTH = 100;

export default function Reviews() {
  const [expandedComments, setExpandedComments] = useState<Record<number, boolean>>({});
  const [displayLimit, setDisplayLimit] = useState(6);

  useEffect(() => {
    // Determine initial limit based on screen size
    const handleResize = () => {
      const newLimit = window.innerWidth < 1024 ? 4 : 6;
      setDisplayLimit((prev) => {
        // Only update on resize if limit is still at initial values (4 or 6)
        // This prevents resetting if user has already clicked "Xem thêm"
        if (prev === 4 || prev === 6) {
          return newLimit;
        }
        return prev;
      });
    };

    const newLimit = window.innerWidth < 1024 ? 4 : 6;
    setDisplayLimit(newLimit);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleComment = (idx: number) => {
    setExpandedComments((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const loadMore = () => {
    setDisplayLimit((prev) => Math.min(prev + 6, reviewsData.length));
  };

  const visibleReviews = reviewsData.slice(0, displayLimit);
  const hasMore = displayLimit < reviewsData.length;
  const showAll = displayLimit >= reviewsData.length;

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
            Đánh giá từ khách hàng
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4 md:mb-6 leading-tight">
            Hơn 10,000+ Khách Hàng Đã Mua Và Đánh Giá Tại Ngáo Store
          </h3>
          <p className="text-gray-500 text-base md:text-lg">
            Sự hài lòng của bạn là ưu tiên hàng đầu của chúng tôi. Dưới đây là những đánh giá thực tế từ gian hàng Ngáo Store trên Shopee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {visibleReviews.map((review: any, idx) => {
            const isExpanded = expandedComments[idx];
            const isLong = review.comment.length > MAX_COMMENT_LENGTH;
            const displayedComment = isExpanded || !isLong
              ? review.comment
              : review.comment.substring(0, MAX_COMMENT_LENGTH) + "...";

            return (
              <div
                key={idx}
                className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group h-full"
              >
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating_star)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                </div>

                {/* Product and Model info */}
                <div className="mb-4 md:mb-6 space-y-2">
                  {review.product_name && (
                    <div className="flex items-start gap-2 text-[10px] md:text-xs text-gray-400">
                      <Tag className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{review.product_name}</span>
                    </div>
                  )}
                  {review.model_name && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/5 text-primary text-[9px] md:text-[10px] font-bold uppercase rounded-full">
                      <Smartphone className="w-3 h-3" />
                      <span>Model: {review.model_name}</span>
                    </div>
                  )}
                </div>

                <div className="flex-grow">
                  <p className="text-gray-600 italic text-sm md:text-base leading-relaxed whitespace-pre-line">
                    &quot;{displayedComment}&quot;
                  </p>
                  {isLong && (
                    <button
                      onClick={() => toggleComment(idx)}
                      className="mt-2 text-primary text-xs md:text-sm font-bold flex items-center gap-1 hover:underline"
                    >
                      {isExpanded ? (
                        <>Thu gọn <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>Đọc thêm <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-50">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm md:text-base font-bold uppercase">
                    {review.author_username.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm md:text-base">
                      {review.author_username}
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-400">{review.mtime}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 flex flex-col items-center gap-4 md:gap-6">
          {hasMore && (
            <button
              onClick={loadMore}
              className="w-full md:w-auto group flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              <span>Xem thêm</span>
            </button>
          )}

          {showAll && (
            <a
              href="https://shopee.vn/ngaostore86"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
            >
              <span>Xem tất cả trên Shopee</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
