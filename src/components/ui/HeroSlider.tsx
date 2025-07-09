import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Crown, Sparkles, ChevronRight, Gift, ChevronLeft } from "lucide-react";
import { HOMESTAY_INFO } from "@/lib/constants";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

interface HeroSliderProps {
  onSectionChange: (section: string, scrollToElement?: string) => void;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "/slides/slide1.png",
    title: "Chào Mừng Đến",
    subtitle: HOMESTAY_INFO.name,
    description:
      "Trải nghiệm không gian sống sang trọng, hiện đại với dịch vụ 5 sao giữa lòng thành phố Mỹ Tho",
    badge: "Homestay Hạng Sang tại Mỹ Tho",
  },
  {
    id: 2,
    image:
      "/slides/slide2.png",
    title: "Phòng Nghỉ",
    subtitle: "Đẳng Cấp Thượng Lưu",
    description:
      "Những căn phòng được thiết kế tinh tế với đầy đủ tiện nghi hiện đại, mang đến trải nghiệm nghỉ dưỡng hoàn hảo",
    badge: "Tiện Nghi 5 Sao",
  },
  {
    id: 3,
    image:
      "/slides/slide3.png",
    title: "Dịch Vụ",
    subtitle: "Hoàn Hảo 24/7",
    description:
      "Đội ngũ nhân viên chuyên nghiệp, tận tâm phục vụ khách hàng với thái độ nhiệt tình và chu đáo nhất",
    badge: "Chăm Sóc Tận Tình",
  },
  {
    id: 4,
    image:
      "/slides/slide4.png",
    title: "Vị Trí",
    subtitle: "Đắc Địa Thuận Lợi",
    description:
      "Tọa lạc tại trung tâm Mỹ Tho, thuận tiện di chuyển đến các điểm du lịch nổi tiếng và trung tâm thương mại",
    badge: "Trung Tâm Mỹ Tho",
  },
];

export default function HeroSlider({ onSectionChange }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[calc(100dvh-63px)] flex items-center justify-center overflow-hidden">
        {/* Slides Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-amber-300/20 to-orange-500/40 z-10" />
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full opacity-30 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-24 h-24 gradient-secondary rounded-full opacity-40 blur-lg"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 right-1/4 w-16 h-16 gradient-accent rounded-full opacity-35 blur-md"
        />

        {/* Slide Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30"
            >
              <Crown className="w-5 h-5 text-amber-300 drop-shadow-lg/45" />
              <span className="text-white font-medium text-shadow-lg/25">
                {currentSlideData.badge}
              </span>
              <Sparkles className="w-5 h-5 text-amber-300 drop-shadow-lg/45" />
            </motion.div>
          </motion.div>

          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-white drop-shadow-2xl/110">
              {currentSlideData.title}
            </span>
            <br />
            <span className="text-gradient text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-amber-100 drop-shadow-xl/110">
              {currentSlideData.subtitle}
            </span>
          </motion.h1>

          <motion.p
            key={`description-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl mb-12 text-orange-50 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg/200"
          >
            {currentSlideData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange("home", "rooms-section")}
              className="group relative px-10 py-5 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <span>Khám Phá Phòng</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange("contact")}
              className="group px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center space-x-2"
            >
              <Gift className="w-5 h-5" />
              <span>Ưu Đãi Đặc Biệt</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="absolute bottom-8 right-8 z-30">
          <motion.div
            key={currentSlide}
            className="w-12 h-1 bg-white/30 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: isAutoPlay ? "100%" : "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
