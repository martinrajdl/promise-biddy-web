"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/*
 * Buddy Carousel Component
 *
 * Wide carousel showing all 9 buddies at once.
 * The highlighted buddy rotates through the list.
 * Full width layout for maximum visibility.
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate highlight every 2.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % buddies.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="w-full py-12 md:py-16 bg-blush"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Meet your potential buddies"
    >
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-base md:text-lg text-text-secondary mb-8">
          Meet your potential buddies
        </p>

        {/* All buddies in a row */}
        <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {buddies.map((buddy, idx) => {
            const isActive = idx === activeIndex;

            return (
              <button
                key={buddy.name}
                onClick={() => setActiveIndex(idx)}
                className={`flex flex-col items-center transition-all duration-300 ease-out ${
                  isActive ? "scale-110" : "scale-100 opacity-70 hover:opacity-100"
                }`}
              >
                <div
                  className={`rounded-2xl p-2 md:p-3 transition-all duration-300 ${
                    isActive
                      ? "bg-warm-white shadow-lg ring-2 ring-sage/30"
                      : "hover:bg-warm-white/50"
                  }`}
                >
                  <Image
                    src={buddy.src}
                    alt={buddy.name}
                    width={80}
                    height={80}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                        : "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                    }`}
                  />
                </div>
                <p
                  className={`text-center mt-2 transition-all duration-300 ${
                    isActive
                      ? "text-sm md:text-base text-text-primary font-medium"
                      : "text-xs md:text-sm text-text-muted"
                  }`}
                >
                  {buddy.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
