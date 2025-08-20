"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import { EVENTS } from "@/constants";
import EventCard from "@/app/(home)/components/event";
import { X } from "lucide-react";
import Link from "next/link";
import getColorFromImage from "@/app/utils/ColorPicker";

// convert #rrggbb or #rgb to rgba(...) with given alpha
function hexToRgba(hex: string, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  const normalized = hex.replace('#', '');
  const full =
    normalized.length === 3
      ? normalized.split('').map((c) => c + c).join('')
      : normalized;
  const int = parseInt(full, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface CarouselProps {
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modelvisible, setmodelvisible] = useState(-1);
  const [dominantColor, setDominantColor] = useState<string | null>(null);
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:pt-5 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l from-slate-900"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {EVENTS.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
              >
                <EventCard
                  onclick={async () => {
                    setmodelvisible(index);
                    // compute image URL (use absolute if needed)
                    try {
                      const imageUrl =
                        item.image && String(item.image).startsWith('http')
                          ? String(item.image)
                          : `/${item.image}`;
                      const { dominantColor } = await getColorFromImage({
                        imageUrl,
                      });
                      setDominantColor(dominantColor);
                      console.log('dominantColor', dominantColor);
                    } catch (err) {
                      setDominantColor(null);
                    }
                  }}
                  event={item}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {modelvisible != -1 && (
          <motion.div
            transition={{
              duration: 0.4,
              stiffness: 1,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed flex flex-col top-0 right-0 bottom-0 z-[999] left-0 shadow-2xl gap-3 p-4  bg-white"
          >
            <div className="flex max-w-[1000px] relative z-[102] w-full mx-auto justify-between items-center mb-4 p-3">
              <div className="flex flex-col w-full">
                <span className="text-4xl">{EVENTS[modelvisible].title}</span>
                <div className="px-5 py-3 rounded-full font-bold">
                  {EVENTS[modelvisible].status ? "OPEN NOW" : "EXPIRED"}
                </div>
              </div>
              <div onClick={() => setmodelvisible(-1)} className="px-4 py-3">
                <X size={40} />
              </div>
            </div>
            <div className="container flex md:flex-row gap-10 flex-col max-w-[1000px] w-full mx-auto items-start">
              <div
                className="absolute z-[99] left-[0] right-0 h-[80%] bottom-0"
                style={{
                  background: dominantColor
                    ? `linear-gradient(to top, ${hexToRgba(
                        dominantColor,
                        0.45
                      )} 0%, rgba(255,255,255,0) 60%)`
                    : undefined,
                }}
              ></div>
              <Image
                src={EVENTS[modelvisible].image}
                className="md:h-[500px] flex  md:w-[40%] w-[100%] rounded-xl overflow-hidden md:relative fixed md:opacity-100 opacity-30 opacity md:bottom-auto bottom-[-200px] md:z-[105] z-[98] md:left-auto left-[50%] md:translate-x-0 translate-x-[-50%]"
                alt=""
                width={1000}
                height={1000}
              />
              <div className="flex flex-col relative md:bg-white rounded-xl z-[100] items-start md:w-[60%] md:min-w-[350px] p-5">
                <p className="text-xl font-regular">
                  {EVENTS[modelvisible].description}
                </p>
                <span className="text-xl mt-4">
                  Date : {EVENTS[modelvisible].eventDate}
                </span>
                <span className="text-xl mt-4">
                  Venue : {EVENTS[modelvisible].Venue}
                </span>
                <div className="flex md:relative fixed z-[101] md:bg-transparent  bg-white bottom-0 left-0 right-0 w-full  p-4 justify-end  gap-3 mt-2">
                  <div className="px-5 py-3 rounded-full">
                    {EVENTS[modelvisible].status ? "OPEN NOW" : "EXPIRED"}
                  </div>
                  <Link
                    href={
                      EVENTS[modelvisible].status
                        ? EVENTS[modelvisible].url
                        : "/"
                    }
                    className={cn(
                      "px-5 py-3 rounded-full text-black font-semibold hover:opacity-85 hover:border-black hover:border-1 ",
                      !EVENTS[modelvisible].status && "bg-secondary text-black font-light"
                    )}
                    style={{
                      backgroundColor:
                        EVENTS[modelvisible].status && dominantColor
                          ? dominantColor
                          : undefined,
                    }}
                  >
                    VISIT LINK
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CarouselContext.Provider>
  );
};

export const CardCarous = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  return (
    <>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
