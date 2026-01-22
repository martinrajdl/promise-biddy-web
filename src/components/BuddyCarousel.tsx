"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/*
 * Buddy Carousel Component
 *
 * A gentle, auto-rotating carousel showcasing all available buddies.
 * Uses CSS transitions for smooth sliding animation.
 * Pauses on hover for accessibility.
 */

const buddies = [
  { name: "Red Panda", src: "/images_promise_buddy/red_panda.png" },
  { name: "Quokka", src: "/images_promise_buddy/quokka.png" },
  { name: "Koala", src: "/images_promise_buddy/koala.png" },
  { name: "Cat", src: "/images_promise_buddy/cat.png" },
  { name: "Dog", src: "/images_promise_buddy/dog.png" },
  { name: "Bear", src: "/images_promise_buddy/bear.png" },
  { name: "Axolotl", src: "/images_promise_buddy/axolotl.png" },
  { name: "Narwhal", src: "/images_promise_buddy/narhwhal.png" },
  { name: "Ghost", src: "/images_promise_buddy/ghost.png" },
];

export default function BuddyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % buddies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Calculate which buddies to show (5 visible at a time on desktop)
  const getVisibleBuddies = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + buddies.length) % buddies.length;
      visible.push({ ...buddies[index], offset: i });
    }
    return visible;
  };

  const visibleBuddies = getVisibleBuddies();

  return (
    <div
      className="w-full py-6 bg-blush overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Meet your potential buddies"
    >
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-sm text-text-muted mb-4">
          Meet your potential buddies
        </p>

        {/* Carousel container */}
        <div className="relative flex items-center justify-center h-24">
          {visibleBuddies.map((buddy, idx) => {
            // Calculate scale and opacity based on position
            const isCenter = buddy.offset === 0;
            const isAdjacent = Math.abs(buddy.offset) === 1;
            const isEdge = Math.abs(buddy.offset) === 2;

            let scale = "scale-100";
            let opacity = "opacity-100";
            let zIndex = "z-10";

            if (isAdjacent) {
              scale = "scale-75";
              opacity = "opacity-70";
              zIndex = "z-5";
            } else if (isEdge) {
              scale = "scale-50";
              opacity = "opacity-40";
              zIndex = "z-0";
            }

            // Position offset
            const translateX = buddy.offset * 80;

            return (
              <div
                key={`${buddy.name}-${idx}`}
                className={`absolute transition-all duration-500 ease-in-out ${scale} ${opacity} ${zIndex}`}
                style={{
                  transform: `translateX(${translateX}px) ${isCenter ? "scale(1)" : ""}`,
                }}
              >
                <div
                  className={`rounded-2xl p-2 ${
                    isCenter ? "bg-warm-white shadow-sm" : ""
                  }`}
                >
                  <Image
                    src={buddy.src}
                    alt={isCenter ? buddy.name : ""}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                    aria-hidden={!isCenter}
                  />
                </div>
                {isCenter && (
                  <p className="text-xs text-text-secondary text-center mt-1">
                    {buddy.name}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-4">
          {buddies.map((buddy, idx) => (
            <button
              key={buddy.name}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex
                  ? "bg-sage"
                  : "bg-stone hover:bg-sand"
              }`}
              aria-label={`View ${buddy.name}`}
              aria-current={idx === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
