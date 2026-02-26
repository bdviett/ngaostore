"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SWIPE_THRESHOLD = 50;

interface SlideshowProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  variant?: "light" | "dark";
  emptyMessage?: string;
}

export default function Slideshow<T>({
  items,
  renderItem,
  keyExtractor,
  variant = "light",
  emptyMessage = "Không có nội dung.",
}: SlideshowProps<T>) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    const mq = (max: number) => window.matchMedia(`(max-width: ${max}px)`);
    const update = () => {
      if (mq(640).matches) setItemsPerSlide(1);
      else if (mq(1024).matches) setItemsPerSlide(2);
      else setItemsPerSlide(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalSlides = Math.max(1, Math.ceil(items.length / itemsPerSlide));
  const clampedIndex = Math.min(slideIndex, Math.max(0, totalSlides - 1));

  const goPrev = useCallback(() => {
    setSlideIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setSlideIndex((i) => Math.min(totalSlides - 1, i + 1));
  }, [totalSlides]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX > 0) goNext();
        else goPrev();
      }
    },
    [goNext, goPrev]
  );

  useEffect(() => {
    setSlideIndex(0);
  }, [items.length]);

  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;
    const id = setInterval(() => {
      setSlideIndex((i) => (i >= totalSlides - 1 ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [totalSlides, isPaused]);

  const isDark = variant === "dark";
  const btnClass = isDark
    ? "border-white/20 bg-white/5 text-white hover:bg-white/10 disabled:opacity-30"
    : "border-gray-200 bg-white text-secondary hover:border-primary/30 hover:text-primary disabled:opacity-50";

  if (items.length === 0) {
    return (
      <p className={`text-center py-12 ${isDark ? "text-white/60" : "text-gray-500"}`}>
        {emptyMessage}
      </p>
    );
  }

  const slideItems = items.slice(
    clampedIndex * itemsPerSlide,
    clampedIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden touch-pan-y">
        <AnimatePresence mode="wait">
          <motion.div
            key={clampedIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {slideItems.map((item) => (
              <div key={keyExtractor(item)} className="min-w-0">
                {renderItem(item)}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalSlides > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-10 px-2">
          <button
            type="button"
            onClick={goPrev}
            disabled={clampedIndex <= 0}
            className={`flex items-center justify-center gap-1 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-sm border transition-all shrink-0 ${btnClass}`}
            aria-label="Trước"
          >
            <ChevronLeft className="w-5 h-5 shrink-0" />
            <span className="hidden sm:inline">Trước</span>
          </button>
          <div className="flex items-center justify-center gap-1.5 flex-wrap py-1">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSlideIndex(i)}
                className={`min-w-[0.5rem] w-2 h-2 sm:min-w-[2rem] sm:h-2 rounded-full shrink-0 transition-all ${
                  clampedIndex === i
                    ? "bg-primary scale-125"
                    : isDark
                      ? "bg-white/30 hover:bg-white/50"
                      : "bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            disabled={clampedIndex >= totalSlides - 1}
            className={`flex items-center justify-center gap-1 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-sm border transition-all shrink-0 ${btnClass}`}
            aria-label="Sau"
          >
            <span className="hidden sm:inline">Sau</span>
            <ChevronRight className="w-5 h-5 shrink-0" />
          </button>
        </div>
      )}
    </div>
  );
}
