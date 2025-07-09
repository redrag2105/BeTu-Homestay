import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Star,
  Shield,
  Users,
  MapPin,
  Heart,
  Navigation,
  Building2,
  ShoppingBag,
  Bus,
  Waves,
  Trees,
} from "lucide-react";
import { HOMESTAY_INFO } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import HeroSlider from "@/components/ui/HeroSlider";
import Rooms from "./Rooms";

interface HomeProps {
  onSectionChange: (section: string, scrollToElement?: string) => void;
}

export default function Home({ onSectionChange }: HomeProps) {
  const stats = [
    { number: "1000+", label: "Khách Hài Lòng", icon: Users },
    { number: "5.0/5", label: "Đánh Giá Trung Bình", icon: Star },
    { number: "98%", label: "Tỷ Lệ Quay Lại", icon: Heart },
    { number: "24.7", label: "Hỗ Trợ Khách Hàng", icon: Shield },
  ];

  const AnimatedCounter = ({
    end,
    duration = 2,
  }: {
    end: string;
    duration?: number;
  }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref);

    useEffect(() => {
      if (!isInView) return;

      const hasNumber = /\d/.test(end);
      if (!hasNumber) {
        if (ref.current) ref.current.textContent = end;
        return;
      }

      const number = parseFloat(end.replace(/[^\d.]/g, ""));
      let current = 0;
      const increment = number / (duration * 60);

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          current = number;
          clearInterval(timer);
        }
        if (ref.current) {
          ref.current.textContent = end.replace(
            /[\d.]+/,
            current.toFixed(end.includes(".") ? 1 : 0),
          );
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, [isInView, end, duration]);

    return <span ref={ref}>0</span>;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Slider */}
      <HeroSlider onSectionChange={onSectionChange} />

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-3xl mb-4 shadow-glow group-hover:shadow-2xl transition-all duration-300"
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-4xl font-bold text-gradient mb-2">
                  <AnimatedCounter end={stat.number} />
                </div>
                <p className="text-orange-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section
        id="rooms-section"
        className="py-16 pb-7 bg-gradient-to-r from-orange-100 to-amber-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-gradient mb-6 pb-3 drop-shadow-md/25">
              Phòng Nghỉ Sang Trọng
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto drop-shadow-sm/30">
              Khám phá các phòng nghỉ được thiết kế tinh tế với đầy đủ tiện nghi
              hiện đại
            </p>
          </motion.div>
          <Rooms />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6 pb-3 drop-shadow-md/35">
              Vị Trí Thuận Lợi
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto drop-shadow-sm/30">
              Nằm tại vị trí đắc địa, BeTu Homestay mang đến sự tiện lợi cho mọi
              chuyến đi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="overflow-hidden shadow-glow border-orange-200/50">
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1610894867494!2d106.3380173!3d10.3569503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa5db8a01e731%3A0x24e42467791f671!2sBeTu%20Homestay%20-%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp!5e0!3m2!1sen!2s!4v1720518392895!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-t-xl"
                  />
                  <div className="absolute top-4 left-4 right-4">
                    <div className="glass-effect rounded-xl p-3 shadow-soft">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center shadow-glow"
                        >
                          <MapPin className="w-4 h-4 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-orange-800 text-sm">
                            BeTu Homestay
                          </h3>
                          <p className="text-orange-600 text-xs">
                            {HOMESTAY_INFO.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/${encodeURIComponent(HOMESTAY_INFO.address)}`,
                        "_blank",
                      )
                    }
                    className="w-full flex items-center justify-center space-x-2 gradient-primary text-white px-4 py-3 rounded-xl font-semibold shadow-glow hover:shadow-2xl transition-all duration-300"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Xem Chỉ Đường</span>
                  </motion.button>
                </div>
              </Card>
            </motion.div>

            {/* Distance Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                {
                  place: "Trung tâm Mỹ Tho",
                  time: "5 phút",
                  distance: "2.1 km",
                  icon: Building2,
                },
                {
                  place: "Chợ Mỹ Tho",
                  time: "3 phút",
                  distance: "1.5 km",
                  icon: ShoppingBag,
                },
                {
                  place: "Bến xe Mỹ Tho",
                  time: "8 phút",
                  distance: "3.2 km",
                  icon: Bus,
                },
                {
                  place: "Sông Tiền",
                  time: "10 phút",
                  distance: "4.1 km",
                  icon: Waves,
                },
                {
                  place: "Cù lao Thới Sơn",
                  time: "15 phút",
                  distance: "8.3 km",
                  icon: Trees,
                },
              ].map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass-effect rounded-xl p-4 shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                        <location.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-orange-800">
                          {location.place}
                        </h3>
                        <p className="text-orange-600 text-sm">
                          {location.distance}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {location.time}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
